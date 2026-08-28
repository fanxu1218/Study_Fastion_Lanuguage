import { Search } from 'lucide-react';

import { LessonBrowser } from '@/components/lesson-browser';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getLessons } from '@/lib/lessons';

export const metadata = {
  title: '搜索课程',
  description: '在五条渐进式中文课程中搜索知识点和 API。',
};

export default function SearchPage() {
  const lessons = getLessons();
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-8">
          <span className="mb-4 grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground"><Search className="size-5" /></span>
          <h1 className="text-4xl font-semibold tracking-[-0.035em]">搜索全部课程</h1>
          <p className="mt-3 text-muted-foreground">输入主题、API 或概念，从 {lessons.length} 节课程中快速定位。</p>
        </div>
        <LessonBrowser lessons={lessons} placeholder="搜索 KMP、ArkUI、Python、Rust、Flutter…" />
      </section>
      <SiteFooter />
    </main>
  );
}
