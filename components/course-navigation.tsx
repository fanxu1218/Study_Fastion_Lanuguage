'use client';

import { BookOpen, ChevronDown, Menu, X } from 'lucide-react';

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
  SheetClose,
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
      <div className="hidden lg:block">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="ghost" className="h-11 gap-2 px-3" />}
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
                30 条路线 · 6 大类别
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
                        className="min-h-11 px-2 py-2"
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

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger
            render={<Button variant="outline" size="icon-lg" className="size-11 rounded-xl" aria-label="打开课程菜单" />}
          >
            <Menu className="size-4" />
          </SheetTrigger>
          <SheetContent side="right" showCloseButton={false} className="h-dvh! w-[min(92vw,26rem)]! max-w-none! gap-0 overflow-hidden p-0 pt-[env(safe-area-inset-top)]">
            <SheetHeader className="shrink-0 border-b py-5 pl-5 pr-16">
              <SheetTitle>全部课程</SheetTitle>
              <SheetDescription>30 条路线按 6 个学习方向分类</SheetDescription>
            </SheetHeader>
            <SheetClose render={<Button variant="ghost" size="icon-lg" className="absolute top-[max(.5rem,env(safe-area-inset-top))] right-[max(.5rem,env(safe-area-inset-right))] size-11" aria-label="关闭课程菜单" />}>
              <X className="size-4" />
            </SheetClose>
            <nav className="min-h-0 flex-1 space-y-6 overflow-y-auto overscroll-contain py-5 pl-5 pr-[max(1.25rem,env(safe-area-inset-right))] pb-[max(1.25rem,env(safe-area-inset-bottom))]" aria-label="移动端课程导航">
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
                        className="flex min-h-11 min-w-0 items-center rounded-lg border border-border/70 bg-card px-3 py-2.5 text-sm [overflow-wrap:anywhere] transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
