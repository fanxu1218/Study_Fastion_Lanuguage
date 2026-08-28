import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, CalendarDays } from 'lucide-react';
import { notFound } from 'next/navigation';

import { LessonBrowser } from '@/components/lesson-browser';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Badge } from '@/components/ui/badge';
import { getLessons, isTrackSlug, trackConfigs } from '@/lib/lessons';

interface TrackPageProps {
  params: Promise<{ track: string }>;
}

export async function generateMetadata({ params }: TrackPageProps): Promise<Metadata> {
  const { track } = await params;
  if (!isTrackSlug(track)) return {};
  return {
    title: `${trackConfigs[track].shortName} 学习路线`,
    description: trackConfigs[track].description,
    openGraph: { images: [] },
    twitter: { images: [] },
  };
}

export default async function TrackPage({ params }: TrackPageProps) {
  const { track } = await params;
  if (!isTrackSlug(track)) notFound();

  const config = trackConfigs[track];
  const lessons = getLessons(track);
  const latest = lessons.at(-1);

  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
          <Link href="/" className="mb-7 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" /> 返回全部路线
          </Link>
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Badge variant="secondary" className="mb-4">{config.eyebrow}</Badge>
              <h1 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">{config.name}</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{config.description}</p>
            </div>
            <div className={`rounded-2xl bg-gradient-to-br ${config.gradient} p-5 text-white shadow-lg`}>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-3xl font-semibold">{lessons.length}</p>
                  <p className="mt-1 text-xs text-white/75">已归档课程</p>
                </div>
                <BookOpen className="size-8 text-white/80" />
              </div>
              {latest && (
                <div className="mt-5 border-t border-white/20 pt-4 text-xs text-white/80">
                  <CalendarDays className="mr-1.5 inline size-3.5" />更新至 {latest.displayDate}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-7">
          <p className="text-sm font-medium text-primary">课程目录</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight">按顺序学习，也可以直接搜索</h2>
        </div>
        <LessonBrowser lessons={lessons} />
      </section>
      <SiteFooter />
    </main>
  );
}
