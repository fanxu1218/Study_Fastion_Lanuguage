import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const tracks = ['kmp', 'harmonyos'];
let hasError = false;

for (const track of tracks) {
  const directory = path.join(root, 'content', track);
  const files = (await readdir(directory))
    .filter((file) => file.endsWith('.md') && file !== 'README.md')
    .sort();
  const lessonNumbers = [];
  const dates = new Set();

  for (const file of files) {
    if (!/^\d{4}-\d{2}-\d{2}-.+\.md$/.test(file)) {
      console.error(`[${track}] 文件名不符合 YYYY-MM-DD-主题.md：${file}`);
      hasError = true;
    }

    const date = file.slice(0, 10);
    if (dates.has(date)) {
      console.error(`[${track}] 同一天存在重复课程：${date}`);
      hasError = true;
    }
    dates.add(date);

    const content = await readFile(path.join(directory, file), 'utf8');
    const title = content.match(/^#\s+(.+)$/m)?.[1];
    const lessonNumber = Number(title?.match(/第\s*(\d+)\s*课/)?.[1]);
    if (!title || !lessonNumber) {
      console.error(`[${track}] 缺少“第 N 课”一级标题：${file}`);
      hasError = true;
      continue;
    }
    lessonNumbers.push(lessonNumber);

    if (!content.includes('```')) {
      console.error(`[${track}] 缺少示例代码块：${file}`);
      hasError = true;
    }
    if (!/练习/.test(content) || !/参考答案/.test(content)) {
      console.error(`[${track}] 缺少练习或参考答案：${file}`);
      hasError = true;
    }
  }

  const expected = Array.from({ length: files.length }, (_, index) => index + 1);
  if (lessonNumbers.join(',') !== expected.join(',')) {
    console.error(`[${track}] 课程序号不连续：${lessonNumbers.join(', ')}`);
    hasError = true;
  }

  console.log(`[${track}] ${files.length} 节课程，日期唯一，课程序号连续。`);
}

if (hasError) process.exit(1);
