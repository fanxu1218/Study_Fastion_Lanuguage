/// <reference types="vite/client" />

export const trackConfigs = {
  kmp: {
    slug: 'kmp',
    name: 'Kotlin Multiplatform',
    shortName: 'KMP',
    eyebrow: '跨平台开发',
    description: '从共享源码集一路学到 Compose Multiplatform、ViewModel 与 Flow。',
    accent: 'bg-indigo-600',
    surface: 'from-indigo-50 to-white dark:from-indigo-950/35 dark:to-card',
    gradient: 'from-indigo-600 to-violet-600',
  },
  harmonyos: {
    slug: 'harmonyos',
    name: 'HarmonyOS / 鸿蒙',
    shortName: '鸿蒙',
    eyebrow: '原生应用开发',
    description: '从 ArkUI 状态管理逐步进阶到数据服务、异步流程与 Hypium 测试。',
    accent: 'bg-rose-600',
    surface: 'from-rose-50 to-white dark:from-rose-950/35 dark:to-card',
    gradient: 'from-rose-600 to-orange-500',
  },
  python: {
    slug: 'python',
    name: 'Python',
    shortName: 'Python',
    eyebrow: '通用编程',
    description: '从语法与数据结构开始，逐步学习函数、模块、自动化与实际项目。',
    accent: 'bg-amber-500',
    surface: 'from-amber-50 to-white dark:from-amber-950/35 dark:to-card',
    gradient: 'from-amber-500 to-yellow-500',
  },
  rust: {
    slug: 'rust',
    name: 'Rust',
    shortName: 'Rust',
    eyebrow: '系统编程',
    description: '从变量与类型开始，逐步掌握所有权、错误处理、并发与工程实践。',
    accent: 'bg-orange-600',
    surface: 'from-orange-50 to-white dark:from-orange-950/35 dark:to-card',
    gradient: 'from-orange-600 to-red-600',
  },
  flutter: {
    slug: 'flutter',
    name: 'Flutter',
    shortName: 'Flutter',
    eyebrow: '跨平台 UI',
    description: '从 Widget 树开始，逐步学习布局、状态、导航、网络与应用架构。',
    accent: 'bg-cyan-600',
    surface: 'from-cyan-50 to-white dark:from-cyan-950/35 dark:to-card',
    gradient: 'from-cyan-600 to-blue-600',
  },
  html5: {
    slug: 'html5',
    name: 'HTML5',
    shortName: 'HTML5',
    eyebrow: '网页基础',
    description: '从语义化文档结构开始，逐步学习表单、媒体、可访问性与浏览器 API。',
    accent: 'bg-emerald-600',
    surface: 'from-emerald-50 to-white dark:from-emerald-950/35 dark:to-card',
    gradient: 'from-emerald-600 to-teal-500',
  },
  react: {
    slug: 'react',
    name: 'React',
    shortName: 'React',
    eyebrow: 'Web 界面开发',
    description: '从组件与 JSX 开始，逐步掌握 Props、State、Hooks 与前端工程实践。',
    accent: 'bg-sky-600',
    surface: 'from-sky-50 to-white dark:from-sky-950/35 dark:to-card',
    gradient: 'from-sky-600 to-blue-500',
  },
  'react-native': {
    slug: 'react-native',
    name: 'React Native',
    shortName: 'React Native',
    eyebrow: '跨平台移动开发',
    description: '从原生基础组件开始，逐步学习布局、交互、导航、网络与移动端适配。',
    accent: 'bg-blue-600',
    surface: 'from-blue-50 to-white dark:from-blue-950/35 dark:to-card',
    gradient: 'from-blue-600 to-indigo-500',
  },
  vue: {
    slug: 'vue',
    name: 'Vue',
    shortName: 'Vue',
    eyebrow: '渐进式前端框架',
    description: '从应用实例与模板开始，逐步学习响应式状态、组件、路由与组合式 API。',
    accent: 'bg-green-600',
    surface: 'from-green-50 to-white dark:from-green-950/35 dark:to-card',
    gradient: 'from-green-600 to-emerald-500',
  },
  cpp: {
    slug: 'cpp',
    name: 'C++',
    shortName: 'C++',
    eyebrow: '高性能编程',
    description: '从程序入口与类型开始，逐步学习函数、类、资源管理、STL 与现代 C++。',
    accent: 'bg-slate-700',
    surface: 'from-slate-100 to-white dark:from-slate-900/55 dark:to-card',
    gradient: 'from-slate-700 to-blue-700',
  },
  java: {
    slug: 'java',
    name: 'Java',
    shortName: 'Java',
    eyebrow: '企业级开发',
    description: '从类与程序入口开始，逐步学习面向对象、集合、异常、并发与工程实践。',
    accent: 'bg-red-600',
    surface: 'from-red-50 to-white dark:from-red-950/35 dark:to-card',
    gradient: 'from-red-600 to-orange-500',
  },
  kotlin: {
    slug: 'kotlin',
    name: 'Kotlin',
    shortName: 'Kotlin',
    eyebrow: '现代 JVM 开发',
    description: '从变量与类型推断开始，逐步学习函数、空安全、集合、协程与应用开发。',
    accent: 'bg-violet-600',
    surface: 'from-violet-50 to-white dark:from-violet-950/35 dark:to-card',
    gradient: 'from-violet-600 to-fuchsia-500',
  },
  csharp: {
    slug: 'csharp',
    name: 'C#',
    shortName: 'C#',
    eyebrow: '.NET 开发',
    description: '从程序入口与类型开始，逐步学习面向对象、集合、异步与 .NET 应用实践。',
    accent: 'bg-purple-600',
    surface: 'from-purple-50 to-white dark:from-purple-950/35 dark:to-card',
    gradient: 'from-purple-600 to-indigo-600',
  },
  golang: {
    slug: 'golang',
    name: 'Go（Golang）',
    shortName: 'Go',
    eyebrow: '云原生开发',
    description: '从 main 包开始，逐步学习函数、结构体、接口、并发与服务端工程实践。',
    accent: 'bg-teal-600',
    surface: 'from-teal-50 to-white dark:from-teal-950/35 dark:to-card',
    gradient: 'from-teal-600 to-cyan-500',
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
    const match = normalizedPath.match(/content\/([^/]+)\/([^/]+)\.md$/);
    if (!match || !isTrackSlug(match[1])) throw new Error(`无法识别课程路径：${path}`);

    const track = match[1];
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
