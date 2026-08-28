import Link from 'next/link';
import { ArrowRight, BookOpen, Clock3 } from 'lucide-react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getLessons, trackConfigs, type TrackSlug } from '@/lib/lessons';

export default function Home() {
  const tracks = (Object.keys(trackConfigs) as TrackSlug[]).map((slug) => {
    const config = trackConfigs[slug];
    const lessons = getLessons(slug);
    const latest = lessons.at(-1);
    return {
      ...config,
      lessons: lessons.length,
      latest: latest?.title.replace(/^第\s*\d+\s*课[:：]?\s*/, '') ?? '即将更新',
      updated: latest?.displayDate ?? '',
      accent: slug === 'kmp' ? 'bg-indigo-600' : 'bg-rose-600',
      surface: slug === 'kmp'
        ? 'from-indigo-50 to-white dark:from-indigo-950/35 dark:to-card'
        : 'from-rose-50 to-white dark:from-rose-950/35 dark:to-card',
    };
  });
  const totalLessons = tracks.reduce((total, track) => total + track.lessons, 0);

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/70">
        <div className="study-grid absolute inset-0 opacity-55" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
          <div>
            <Badge variant="secondary" className="mb-5 rounded-full px-3 py-1">
              {totalLessons} 节中文短课 · 持续更新
            </Badge>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-[-0.035em] sm:text-6xl">
              把每天的十分钟，
              <span className="text-primary">积累成真正的技术栈。</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              KMP 与 HarmonyOS 渐进式学习档案。每课只聚焦一个主题，配有最小示例、动手练习和参考答案。
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card/80 p-5 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                <Clock3 className="size-5" />
              </span>
              <div>
                <p className="text-sm font-medium">日更学习节奏</p>
                <p className="text-xs text-muted-foreground">鸿蒙 09:00 · KMP 10:00</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              新课程会自动归档到对应路线，保留完整学习历史。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-primary">学习路线</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">从最新一课继续</h2>
          </div>
          <p className="hidden text-sm text-muted-foreground sm:block">后续语言会以新的路线加入这里</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {tracks.map((track) => (
            <Card key={track.slug} className={`bg-gradient-to-br ${track.surface} py-0 shadow-sm`}>
              <CardHeader className="gap-4 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className={`grid size-12 place-items-center rounded-2xl ${track.accent} text-white shadow-sm`}>
                    <BookOpen className="size-5" />
                  </span>
                  <Badge variant="outline" className="bg-background/70">{track.lessons} 节</Badge>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {track.eyebrow}
                  </p>
                  <CardTitle className="text-2xl">{track.name}</CardTitle>
                  <CardDescription className="mt-2 max-w-xl text-sm leading-6">
                    {track.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6 sm:px-7">
                <div className="rounded-xl border border-border/70 bg-background/75 p-4">
                  <p className="text-xs text-muted-foreground">最新课程 · {track.updated}</p>
                  <p className="mt-1 text-sm font-medium">{track.latest}</p>
                </div>
              </CardContent>
              <CardFooter className="justify-between border-border/70 bg-background/50 px-6 py-4 sm:px-7">
                <span className="text-xs text-muted-foreground">从第 1 课开始，也可以接着学</span>
                <Link href={`/${track.slug}`} className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  查看{track.shortName}课程
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
