import { ArrowRight, BookOpen, Clock3 } from 'lucide-react';
import Image from 'next/image';

import { NativeLink } from '@/components/native-link';
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
import { getLessons, trackConfigs, trackGroups, type TrackSlug } from '@/lib/lessons';

export default function Home() {
  const trackEntries = (Object.keys(trackConfigs) as TrackSlug[]).map((slug) => {
    const config = trackConfigs[slug];
    const lessons = getLessons(slug);
    const latest = lessons.at(-1);
    return {
      ...config,
      lessons: lessons.length,
      latest: latest?.title.replace(/^第\s*\d+\s*课[:：]?\s*/, '') ?? '即将更新',
      updated: latest?.displayDate ?? '',
    };
  });
  const tracks = new Map(trackEntries.map((track) => [track.slug, track]));
  const totalLessons = trackEntries.reduce((total, track) => total + track.lessons, 0);

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/70">
        <div className="study-grid absolute inset-0 opacity-55" />
        <div className="site-container relative mx-auto grid max-w-6xl gap-6 py-9 sm:py-14 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:gap-10 lg:py-24">
          <div className="min-w-0">
            <Badge variant="secondary" className="mb-5 rounded-full px-3 py-1">
              {totalLessons} 节中文短课 · 持续更新
            </Badge>
            <h1 className="max-w-3xl text-[clamp(1.5rem,7.5vw,1.875rem)] font-semibold leading-[1.25] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              <span className="block">把每天的十分钟，</span>
              <span className="block text-primary">积累成真正的技术栈。</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              30 条路线覆盖 AI 应用与智能体、FDE 业务交付、编程语言、应用与跨平台、Web、游戏引擎与动画、设计与影视后期。每课只聚焦一个主题，配有最小示例、动手练习和参考答案。
            </p>
            <NativeLink href="#learning-routes" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              浏览学习路线 <ArrowRight className="size-4" />
            </NativeLink>
          </div>
          <div className="space-y-4">
            <div className="hidden overflow-hidden rounded-2xl border border-border/70 bg-card shadow-lg lg:block">
              <Image
                src="/og-v7.png"
                alt="三十条渐进式编程、AI 应用、FDE 与数字创作学习路线"
                width={1731}
                height={909}
                sizes="(min-width: 1152px) 500px, (min-width: 1024px) 45vw, 100vw"
                priority
                className="h-auto w-full"
              />
            </div>
            <div className="rounded-2xl border border-border/70 bg-card/80 p-4 shadow-sm backdrop-blur sm:p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  <Clock3 className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-medium">工作日学习节奏</p>
                  <p className="text-xs text-muted-foreground">周一至周五 · 09:00</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                三十条路线同步更新，周末休息，并保留完整学习历史。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="learning-routes" className="site-container mx-auto max-w-6xl py-8 sm:py-12">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-primary">学习路线</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">从最新一课继续</h2>
          </div>
          <p className="hidden text-sm text-muted-foreground lg:block">三十条路线，每个工作日各推进一课</p>
        </div>

        <nav className="mb-8 flex flex-wrap gap-2" aria-label="学习方向直达">
          {trackGroups.map((group) => (
            <NativeLink key={group.slug} href={`#group-${group.slug}`} className="inline-flex min-h-11 items-center rounded-full border border-border bg-card px-3 py-2 text-sm text-muted-foreground hover:border-primary/35 hover:text-primary">
              {group.name}
            </NativeLink>
          ))}
        </nav>

        <div className="space-y-10 sm:space-y-14">
          {trackGroups.map((group) => (
            <section key={group.slug} aria-labelledby={`group-${group.slug}`}>
              <div className="mb-5 flex flex-col gap-2 border-l-4 border-primary pl-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 id={`group-${group.slug}`} className="text-xl font-semibold tracking-tight sm:text-2xl">{group.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{group.description}</p>
                </div>
                <Badge variant="secondary" className="w-fit rounded-full">{group.tracks.length} 条路线</Badge>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-5">
                {group.tracks.map((slug) => {
                  const track = tracks.get(slug);
                  if (!track) return null;
                  return (
                    <Card key={track.slug} className={`min-w-0 gap-4 bg-gradient-to-br ${track.surface} py-0 shadow-sm`}>
                      <CardHeader className="gap-3 p-5 pb-0 sm:p-6 sm:pb-0">
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
                          <CardTitle className="text-xl leading-snug [overflow-wrap:anywhere] lg:text-2xl">{track.name}</CardTitle>
                          <CardDescription className="mt-2 max-w-xl text-sm leading-6">
                            {track.description}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="px-5 sm:px-6">
                        <div className="rounded-xl border border-border/70 bg-background/75 p-4">
                          <p className="text-xs text-muted-foreground">最新课程 · {track.updated}</p>
                          <p className="mt-1 text-sm font-medium">{track.latest}</p>
                        </div>
                      </CardContent>
                      <CardFooter className="mt-auto flex-wrap justify-between gap-x-4 gap-y-1 border-border/70 bg-background/50 px-5 py-2 sm:px-6">
                        <span className="text-xs text-muted-foreground">从第 1 课开始，也可以接着学</span>
                        <NativeLink href={`/${track.slug}`} className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-primary">
                          查看{track.shortName}课程
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </NativeLink>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
