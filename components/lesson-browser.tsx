'use client';

import { ArrowRight, Search } from 'lucide-react';
import { useId, useMemo, useState } from 'react';

import { NativeLink } from '@/components/native-link';
import { Input } from '@/components/ui/input';

interface BrowserLesson {
  track: string;
  slug: string;
  title: string;
  number: number;
  date: string;
  summary: string;
  searchText: string;
}

export function LessonBrowser({ lessons, placeholder = '搜索本路线课程…' }: { lessons: BrowserLesson[]; placeholder?: string }) {
  const searchId = useId();
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLocaleLowerCase('zh-CN');
  const filteredLessons = useMemo(
    () => normalizedQuery
      ? lessons.filter((lesson) => lesson.searchText.includes(normalizedQuery))
      : lessons,
    [lessons, normalizedQuery],
  );

  return (
    <div>
      <label htmlFor={searchId} className="relative mb-6 block">
        <span className="sr-only">搜索课程</span>
        <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          id={searchId}
          type="search"
          enterKeyHint="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          className="h-12 rounded-xl bg-card pl-11 text-base md:text-base"
        />
      </label>

      <div className="mb-4 flex min-h-11 items-center justify-between text-xs text-muted-foreground">
        <span role="status">{filteredLessons.length} 节课程</span>
        {query && <button type="button" onClick={() => setQuery('')} className="min-h-11 rounded-lg px-3 hover:text-foreground">清除搜索</button>}
      </div>

      {filteredLessons.length > 0 ? (
        <ol className="grid gap-3">
          {filteredLessons.map((lesson) => (
            <li key={`${lesson.track}-${lesson.slug}`}>
              <NativeLink
                href={`/${lesson.track}/${lesson.slug}`}
                className="group grid min-w-0 grid-cols-[minmax(0,1fr)_auto] gap-x-3 gap-y-2 rounded-2xl border border-border/70 bg-card p-4 shadow-[0_1px_0_rgb(0_0_0/3%)] transition-colors hover:border-primary/35 hover:shadow-md sm:grid-cols-[58px_minmax(0,1fr)_auto] sm:items-center sm:p-5"
              >
                <span className="text-xs font-semibold text-primary">第 {lesson.number} 课</span>
                <span className="col-span-2 row-start-2 min-w-0 sm:col-span-1 sm:col-start-2 sm:row-start-1">
                  <span className="block font-medium tracking-tight [overflow-wrap:anywhere]">{lesson.title.replace(/^第\s*\d+\s*课[:：]?\s*/, '')}</span>
                  <span className="mt-1 line-clamp-2 text-sm leading-6 text-muted-foreground">{lesson.summary}</span>
                </span>
                <span className="col-start-2 row-start-1 flex items-center gap-2 text-xs text-muted-foreground sm:col-start-3 sm:gap-3">
                  {lesson.date.replaceAll('-', '.')}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </NativeLink>
            </li>
          ))}
        </ol>
      ) : (
        <div className="rounded-2xl border border-dashed border-border p-10 text-center">
          <p className="font-medium">没有找到匹配课程</p>
          <p className="mt-1 text-sm text-muted-foreground">换一个知识点或 API 名称试试。</p>
        </div>
      )}
    </div>
  );
}
