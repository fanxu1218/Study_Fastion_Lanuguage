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
  android: {
    slug: 'android',
    name: 'Android',
    shortName: 'Android',
    eyebrow: '原生移动开发',
    description: '从 Activity 与应用入口开始，逐步学习界面、状态、导航、数据与 Jetpack Compose。',
    accent: 'bg-lime-600',
    surface: 'from-lime-50 to-white dark:from-lime-950/35 dark:to-card',
    gradient: 'from-lime-600 to-green-600',
  },
  'objective-c': {
    slug: 'objective-c',
    name: 'Objective-C',
    shortName: 'Objective-C',
    eyebrow: 'Apple 原生基础',
    description: '从程序入口与消息发送开始，逐步学习对象、属性、内存管理与运行时机制。',
    accent: 'bg-zinc-700',
    surface: 'from-zinc-100 to-white dark:from-zinc-900/55 dark:to-card',
    gradient: 'from-zinc-700 to-slate-600',
  },
  swift: {
    slug: 'swift',
    name: 'Swift',
    shortName: 'Swift',
    eyebrow: 'Apple 平台语言',
    description: '从常量与变量开始，逐步学习可选值、函数、类型、协议与并发。',
    accent: 'bg-orange-500',
    surface: 'from-orange-50 to-white dark:from-orange-950/35 dark:to-card',
    gradient: 'from-orange-500 to-amber-500',
  },
  swiftui: {
    slug: 'swiftui',
    name: 'SwiftUI',
    shortName: 'SwiftUI',
    eyebrow: 'Apple 声明式 UI',
    description: '从 View 与声明式界面开始，逐步学习状态、布局、导航、数据流与动画。',
    accent: 'bg-pink-600',
    surface: 'from-pink-50 to-white dark:from-pink-950/35 dark:to-card',
    gradient: 'from-pink-600 to-rose-500',
  },
  unity: {
    slug: 'unity',
    name: 'Unity 引擎',
    shortName: 'Unity',
    eyebrow: '跨平台游戏开发',
    description: '从 GameObject 与组件开始，逐步学习场景、物理、动画、UI 与游戏架构。',
    accent: 'bg-neutral-700',
    surface: 'from-neutral-100 to-white dark:from-neutral-900/55 dark:to-card',
    gradient: 'from-neutral-700 to-slate-600',
  },
  'cocos-creator': {
    slug: 'cocos-creator',
    name: 'Cocos Creator 引擎',
    shortName: 'Cocos Creator',
    eyebrow: '轻量跨平台游戏开发',
    description: '从节点与组件开始，逐步学习场景、资源、动画、物理与 TypeScript 脚本。',
    accent: 'bg-blue-700',
    surface: 'from-blue-50 to-white dark:from-blue-950/35 dark:to-card',
    gradient: 'from-blue-700 to-cyan-600',
  },
  'unreal-engine': {
    slug: 'unreal-engine',
    name: '虚幻引擎（Unreal Engine）',
    shortName: '虚幻引擎',
    eyebrow: '高品质实时内容开发',
    description: '从 Actor 与关卡开始，逐步学习蓝图、C++、材质、动画与游戏系统。',
    accent: 'bg-stone-800',
    surface: 'from-stone-100 to-white dark:from-stone-900/55 dark:to-card',
    gradient: 'from-stone-800 to-zinc-600',
  },
  spine: {
    slug: 'spine',
    name: 'Spine',
    shortName: 'Spine',
    eyebrow: '2D 骨骼动画',
    description: '从骨骼、插槽与附件开始，逐步学习权重、约束、动画混合与运行时集成。',
    accent: 'bg-emerald-700',
    surface: 'from-emerald-50 to-white dark:from-emerald-950/35 dark:to-card',
    gradient: 'from-emerald-700 to-lime-600',
  },
  c4d: {
    slug: 'c4d',
    name: 'C4D（Cinema 4D）',
    shortName: 'C4D',
    eyebrow: '三维设计与动画',
    description: '从对象管理器和基础对象开始，逐步学习建模、材质、灯光、动画与渲染。',
    accent: 'bg-blue-800',
    surface: 'from-blue-50 to-white dark:from-blue-950/35 dark:to-card',
    gradient: 'from-blue-800 to-indigo-600',
  },
  blender: {
    slug: 'blender',
    name: 'Blender',
    shortName: 'Blender',
    eyebrow: '开源三维创作',
    description: '从对象模式和场景管理开始，逐步学习建模、材质、动画、灯光与渲染。',
    accent: 'bg-orange-700',
    surface: 'from-orange-50 to-white dark:from-orange-950/35 dark:to-card',
    gradient: 'from-orange-700 to-amber-500',
  },
  photoshop: {
    slug: 'photoshop',
    name: 'Photoshop（PS）',
    shortName: 'Photoshop',
    eyebrow: '图像设计与处理',
    description: '从图层与非破坏编辑开始，逐步学习选区、蒙版、调色、修图与合成。',
    accent: 'bg-sky-700',
    surface: 'from-sky-50 to-white dark:from-sky-950/35 dark:to-card',
    gradient: 'from-sky-700 to-cyan-500',
  },
  'final-cut-pro': {
    slug: 'final-cut-pro',
    name: 'Final Cut Pro',
    shortName: 'Final Cut Pro',
    eyebrow: '专业视频剪辑',
    description: '从资源库、事件与项目开始，逐步学习素材管理、磁性时间线、音频、调色与交付。',
    accent: 'bg-fuchsia-700',
    surface: 'from-fuchsia-50 to-white dark:from-fuchsia-950/35 dark:to-card',
    gradient: 'from-fuchsia-700 to-purple-600',
  },
  motion: {
    slug: 'motion',
    name: 'Motion',
    shortName: 'Motion',
    eyebrow: '动态图形与特效',
    description: '从项目、群组与图层开始，逐步学习关键帧、行为、粒子、文字动画与模板。',
    accent: 'bg-violet-700',
    surface: 'from-violet-50 to-white dark:from-violet-950/35 dark:to-card',
    gradient: 'from-violet-700 to-pink-600',
  },
  'davinci-resolve': {
    slug: 'davinci-resolve',
    name: 'DaVinci Resolve',
    shortName: 'DaVinci Resolve',
    eyebrow: '剪辑调色与后期',
    description: '从项目、媒体池与时间线开始，逐步学习剪辑、Fusion、调色、Fairlight 与交付。',
    accent: 'bg-red-700',
    surface: 'from-red-50 to-white dark:from-red-950/35 dark:to-card',
    gradient: 'from-red-700 to-blue-700',
  },
} as const;

export type TrackSlug = keyof typeof trackConfigs;

export const trackGroups = [
  {
    slug: 'languages',
    name: '编程语言',
    description: '建立语法、类型、工程与并发等可迁移的编程基本功。',
    tracks: ['python', 'rust', 'cpp', 'java', 'kotlin', 'csharp', 'golang', 'objective-c', 'swift'],
  },
  {
    slug: 'app-development',
    name: '应用与跨平台开发',
    description: '面向移动端、桌面端和多平台应用的界面、状态与工程实践。',
    tracks: ['kmp', 'harmonyos', 'flutter', 'react-native', 'android', 'swiftui'],
  },
  {
    slug: 'web-development',
    name: 'Web 开发',
    description: '从网页语义基础逐步进入组件化和现代前端应用开发。',
    tracks: ['html5', 'react', 'vue'],
  },
  {
    slug: 'game-development',
    name: '游戏引擎与动画',
    description: '学习实时场景、游戏系统、资源管线与二维骨骼动画。',
    tracks: ['unity', 'cocos-creator', 'unreal-engine', 'spine'],
  },
  {
    slug: 'design-post-production',
    name: '设计与影视后期',
    description: '覆盖三维创作、图像设计、视频剪辑、动态图形与专业调色。',
    tracks: ['c4d', 'blender', 'photoshop', 'final-cut-pro', 'motion', 'davinci-resolve'],
  },
] as const satisfies ReadonlyArray<{
  slug: string;
  name: string;
  description: string;
  tracks: readonly TrackSlug[];
}>;

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
