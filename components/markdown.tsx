import Link from 'next/link';
import type { ReactNode } from 'react';

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const pattern = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(pattern).filter(Boolean);

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={key} className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[.9em] text-primary">{part.slice(1, -1)}</code>;
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const external = /^https?:\/\//.test(link[2]);
      return external
        ? <a key={key} href={link[2]} target="_blank" rel="noreferrer">{link[1]}</a>
        : <Link key={key} href={link[2]}>{link[1]}</Link>;
    }
    return part;
  });
}

function isBlockStart(line: string) {
  return /^(#{1,3})\s+/.test(line)
    || line.startsWith('```')
    || /^>\s?/.test(line)
    || /^[-*]\s+/.test(line)
    || /^\d+\.\s+/.test(line);
}

export function Markdown({ content }: { content: string }) {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const blocks: ReactNode[] = [];
  let index = 0;
  let blockKey = 0;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }

    const fence = line.match(/^```([^\s]*)\s*$/);
    if (fence) {
      const code: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].startsWith('```')) {
        code.push(lines[index]);
        index += 1;
      }
      index += 1;
      blocks.push(
        <div key={`block-${blockKey++}`} className="code-block">
          {fence[1] && <div className="code-language">{fence[1]}</div>}
          <pre><code>{code.join('\n')}</code></pre>
        </div>,
      );
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const children = renderInline(heading[2], `heading-${blockKey}`);
      if (level === 1) blocks.push(<h1 key={`block-${blockKey++}`}>{children}</h1>);
      else if (level === 2) blocks.push(<h2 key={`block-${blockKey++}`}>{children}</h2>);
      else blocks.push(<h3 key={`block-${blockKey++}`}>{children}</h3>);
      index += 1;
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^[-*]\s+/, ''));
        index += 1;
      }
      blocks.push(
        <ul key={`block-${blockKey++}`}>
          {items.map((item, itemIndex) => <li key={itemIndex}>{renderInline(item, `ul-${blockKey}-${itemIndex}`)}</li>)}
        </ul>,
      );
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\.\s+/, ''));
        index += 1;
      }
      blocks.push(
        <ol key={`block-${blockKey++}`}>
          {items.map((item, itemIndex) => <li key={itemIndex}>{renderInline(item, `ol-${blockKey}-${itemIndex}`)}</li>)}
        </ol>,
      );
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quote: string[] = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) {
        quote.push(lines[index].replace(/^>\s?/, ''));
        index += 1;
      }
      blocks.push(<blockquote key={`block-${blockKey++}`}>{renderInline(quote.join(' '), `quote-${blockKey}`)}</blockquote>);
      continue;
    }

    const paragraph: string[] = [];
    while (index < lines.length && lines[index].trim() && !isBlockStart(lines[index])) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(<p key={`block-${blockKey++}`}>{renderInline(paragraph.join(' '), `p-${blockKey}`)}</p>);
  }

  return <div className="lesson-markdown">{blocks}</div>;
}
