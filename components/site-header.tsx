import Link from 'next/link';
import { Code2, Search } from 'lucide-react';

import { trackConfigs, type TrackSlug } from '@/lib/lessons';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-5 px-5 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3 font-semibold tracking-tight">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Code2 className="size-4" />
          </span>
          <span>渐进式编程课</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-4 text-sm lg:flex" aria-label="主要导航">
          {(Object.keys(trackConfigs) as TrackSlug[]).map((track) => (
            <Link key={track} href={`/${track}`} className="text-muted-foreground transition-colors hover:text-foreground">
              {trackConfigs[track].shortName}
            </Link>
          ))}
        </nav>
        <Link
          href="/search"
          aria-label="搜索课程"
          className="grid size-9 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
        >
          <Search className="size-4" />
        </Link>
      </div>
    </header>
  );
}
