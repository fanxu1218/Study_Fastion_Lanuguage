import { Code2, Search } from 'lucide-react';

import { CourseNavigation } from '@/components/course-navigation';
import { NativeLink } from '@/components/native-link';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
      <div className="site-container mx-auto flex h-16 max-w-6xl items-center gap-2 sm:gap-3">
        <NativeLink href="/" className="flex min-h-11 shrink-0 items-center gap-2 font-semibold tracking-tight sm:gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Code2 className="size-4" />
          </span>
          <span>渐进式编程课</span>
        </NativeLink>
        <div className="ml-auto">
          <CourseNavigation />
        </div>
        <NativeLink
          href="/search"
          aria-label="搜索课程"
          className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
        >
          <Search className="size-4" />
        </NativeLink>
      </div>
    </header>
  );
}
