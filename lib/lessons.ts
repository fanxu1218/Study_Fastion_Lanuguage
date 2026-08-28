/// <reference types="vite/client" />

export const trackConfigs = {
  kmp: {
    slug: 'kmp',
    name: 'Kotlin Multiplatform',
    shortName: 'KMP',
    eyebrow: '跨平台开发',
    description: '从共享源码集一路学到 Compose Multiplatform、ViewModel 与 Flow。',
    color: 'indigo',
  },
  harmonyos: {
    slug: 'harmonyos',
    name: 'HarmonyOS / 鸿蒙',
    shortName: '鸿蒙',
    eyebrow: '原生应用开发',
    description: '从 ArkUI 状态管理逐步进阶到数据服务、异步流程与 Hypium 测试。',
    color: 'rose',
  },
} as const;

export type TrackSlug = keyof typeof trackConfigs;

export interface Lesson {
  track: TrackSlug;
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  number: number;
  summary: string;
  content: string;
  searchText: string;
}

const markdownModules = import.meta.glob('../content/**/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
}) as Record<string, string>;

function cleanInline(value: string) {
  return value
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`*_>#~-]/g, '')
    .replace(/^\s*\d+\.\s+/, '')
    .replace(/^\s*[-+]\s+/, '')
    .trim();
}

function extractSummary(content: string) {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const preferredHeading = lines.findIndex((line) => /^##\s+(用途|适用场景)/.test(line));

  if (preferredHeading >= 0) {
    for (let index = preferredHeading + 1; index < lines.length; index += 1) {
      const line = lines[index].trim();
      if (line.startsWith('## ')) break;
      if (line && !line.startsWith('```')) return cleanInline(line);
    }
  }

  for (const line of lines.slice(1)) {
    const candidate = line.trim();
    if (!candidate || candidate.startsWith('#') || candidate.startsWith('```')) continue;
    if (/^-\s*(日期|课程序号|知识点)[:：]/.test(candidate)) continue;
    return cleanInline(candidate);
  }

  return '一节短小、可执行的渐进式编程课程。';
}

const lessons = Object.entries(markdownModules)
  .filter(([path]) => !path.endsWith('/README.md'))
  .map(([path, rawContent]): Lesson => {
    const normalizedPath = path.replace(/\\/g, '/');
    const match = normalizedPath.match(/content\/(kmp|harmonyos)\/([^/]+)\.md$/);
    if (!match) throw new Error(`无法识别课程路径：${path}`);

    const track = match[1] as TrackSlug;
    const slug = match[2];
    const content = rawContent.replace(/\r\n/g, '\n').trimEnd();
    const title = cleanInline(content.match(/^#\s+(.+)$/m)?.[1] ?? slug);
    const date = slug.match(/^(\d{4}-\d{2}-\d{2})/)?.[1] ?? '';
    const number = Number(title.match(/第\s*(\d+)\s*课/)?.[1] ?? 0);
    const summary = extractSummary(content);

    return {
      track,
      slug,
      title,
      date,
      displayDate: date.replaceAll('-', '.'),
      number,
      summary,
      content,
      searchText: cleanInline(content).toLocaleLowerCase('zh-CN'),
    };
  })
  .sort((left, right) => left.number - right.number || left.date.localeCompare(right.date));

export function isTrackSlug(value: string): value is TrackSlug {
  return value in trackConfigs;
}

export function getLessons(track?: TrackSlug) {
  return track ? lessons.filter((lesson) => lesson.track === track) : lessons;
}

export function getLesson(track: TrackSlug, slug: string) {
  return lessons.find((lesson) => lesson.track === track && lesson.slug === slug);
}

export function getLessonNeighbors(lesson: Lesson) {
  const trackLessons = getLessons(lesson.track);
  const index = trackLessons.findIndex((candidate) => candidate.slug === lesson.slug);
  return {
    previous: index > 0 ? trackLessons[index - 1] : undefined,
    next: index >= 0 && index < trackLessons.length - 1 ? trackLessons[index + 1] : undefined,
  };
}
