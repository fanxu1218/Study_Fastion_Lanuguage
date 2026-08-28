import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CalendarDays, ListOrdered } from 'lucide-react';
import { notFound } from 'next/navigation';

import { Markdown } from '@/components/markdown';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Badge } from '@/components/ui/badge';
import { getLesson, getLessonNeighbors, isTrackSlug, trackConfigs } from '@/lib/lessons';
import { getLessons } from '@/lib/lessons';

interface LessonPageProps {
  params: Promise<{ track: string; slug: string }>;
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { track, slug } = await params;
  if (!isTrackSlug(track)) return {};
  const lesson = getLesson(track, decodeURIComponent(slug));
  if (!lesson) return {};
  return { title: lesson.title, description: lesson.summary };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { track, slug } = await params;
  if (!isTrackSlug(track)) notFound();
  const lesson = getLesson(track, decodeURIComponent(slug));
  if (!lesson) notFound();

  const config = trackConfigs[track];
  const { previous, next } = getLessonNeighbors(lesson);
  const totalLessons = getLessons(track).length;

  return (
    <main className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[190px_minmax(0,760px)] lg:justify-center">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <Link href={`/${track}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="size-4" /> {config.shortName} 目录
              </Link>
              <div className="mt-6 rounded-2xl border border-border/70 bg-card p-4">
                <p className="text-xs text-muted-foreground">当前进度</p>
                <p className="mt-1 text-lg font-semibold">第 {lesson.number} 课</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${(lesson.number / totalLessons) * 100}%` }} />
                </div>
              </div>
            </div>
          </aside>

          <article>
            <Link href={`/${track}`} className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground lg:hidden">
              <ArrowLeft className="size-4" /> {config.shortName} 目录
            </Link>
            <div className="mb-8 border-b border-border/70 pb-7">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="secondary"><ListOrdered className="mr-1 size-3" />第 {lesson.number} 课</Badge>
                <Badge variant="outline"><CalendarDays className="mr-1 size-3" />{lesson.displayDate}</Badge>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{lesson.summary}</p>
            </div>

            <Markdown content={lesson.content} />

            <nav className="mt-12 grid gap-3 border-t border-border/70 pt-7 sm:grid-cols-2" aria-label="课程翻页">
              {previous ? (
                <Link href={`/${track}/${previous.slug}`} className="group rounded-2xl border border-border/70 bg-card p-4 hover:border-primary/35">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><ArrowLeft className="size-3.5" />上一课</span>
                  <span className="mt-2 block text-sm font-medium">{previous.title.replace(/^第\s*\d+\s*课[:：]?\s*/, '')}</span>
                </Link>
              ) : <span />}
              {next && (
                <Link href={`/${track}/${next.slug}`} className="group rounded-2xl border border-border/70 bg-card p-4 text-right hover:border-primary/35">
                  <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">下一课<ArrowRight className="size-3.5" /></span>
                  <span className="mt-2 block text-sm font-medium">{next.title.replace(/^第\s*\d+\s*课[:：]?\s*/, '')}</span>
                </Link>
              )}
            </nav>
          </article>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
