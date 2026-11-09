import type { Metadata } from 'next';
import { ArrowLeft, BookOpen, CalendarDays } from 'lucide-react';
import { notFound } from 'next/navigation';

import { LessonBrowser } from '@/components/lesson-browser';
import { NativeLink } from '@/components/native-link';
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
        <div className="site-container mx-auto max-w-6xl py-5 sm:py-10">
          <NativeLink href="/" className="mb-4 inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" /> 返回全部路线
          </NativeLink>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div className="min-w-0">
              <Badge variant="secondary" className="mb-4">{config.eyebrow}</Badge>
              <h1 className="text-3xl font-semibold tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-4xl lg:text-5xl">{config.name}</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{config.description}</p>
            </div>
            <div className={`flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-br ${config.gradient} p-4 text-white shadow-lg md:block md:p-5`}>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-3xl font-semibold">{lessons.length}</p>
                  <p className="mt-1 text-xs text-white/75">已归档课程</p>
                </div>
                <BookOpen className="hidden size-8 text-white/80 md:block" />
              </div>
              {latest && (
                <div className="text-xs text-white/80 md:mt-5 md:border-t md:border-white/20 md:pt-4">
                  <CalendarDays className="mr-1.5 inline size-3.5" />更新至 {latest.displayDate}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="site-container mx-auto max-w-4xl py-7 sm:py-10">
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
