'use client';

import { BookOpen, ChevronDown, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { trackConfigs, trackGroups } from '@/lib/lessons';

export function CourseNavigation() {
  return (
    <>
      <div className="hidden sm:block">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="ghost" className="h-9 gap-2 px-3" />}
          >
            <BookOpen className="size-4" />
            全部课程
            <ChevronDown className="size-3.5 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={10}
            className="w-[min(42rem,calc(100vw-2rem))] p-2"
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="px-2 py-2 text-sm text-foreground">
                28 条路线 · 5 大类别
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <div className="grid gap-1 p-1 md:grid-cols-2">
              {trackGroups.map((group) => (
                <div key={group.slug} className="rounded-lg p-1.5">
                  <p className="px-2 pb-1.5 text-xs font-semibold text-primary">
                    {group.name}
                    <span className="ml-1 font-normal text-muted-foreground">{group.tracks.length} 条</span>
                  </p>
                  <div className="grid grid-cols-2 gap-0.5">
                    {group.tracks.map((slug) => (
                      <DropdownMenuItem
                        key={slug}
                        render={<a href={`/${slug}`} />}
                        className="min-h-8 px-2 py-1.5"
                      >
                        <span className="truncate">{trackConfigs[slug].shortName}</span>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger
            render={<Button variant="outline" size="icon-lg" aria-label="打开课程菜单" />}
          >
            <Menu className="size-4" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(92vw,26rem)] gap-0 overflow-hidden p-0">
            <SheetHeader className="border-b px-5 py-5">
              <SheetTitle>全部课程</SheetTitle>
              <SheetDescription>28 条路线按 5 个学习方向分类</SheetDescription>
            </SheetHeader>
            <nav className="flex-1 space-y-6 overflow-y-auto px-5 py-5" aria-label="移动端课程导航">
              {trackGroups.map((group) => (
                <section key={group.slug} aria-labelledby={`mobile-group-${group.slug}`}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <h2 id={`mobile-group-${group.slug}`} className="text-sm font-semibold text-primary">
                      {group.name}
                    </h2>
                    <span className="text-xs text-muted-foreground">{group.tracks.length} 条</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {group.tracks.map((slug) => (
                      <a
                        key={slug}
                        href={`/${slug}`}
                        className="rounded-lg border border-border/70 bg-card px-3 py-2.5 text-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {trackConfigs[slug].shortName}
                      </a>
                    ))}
                  </div>
                </section>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
