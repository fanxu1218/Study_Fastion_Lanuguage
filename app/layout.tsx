import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://study.fanxu12180618.chatgpt.site'),
  title: {
    default: '渐进式编程课',
    template: '%s · 渐进式编程课',
  },
  description: '二十二条编程路线在每个工作日同步更新，用中文短课持续积累技术栈。',
  openGraph: {
    title: '渐进式编程课',
    description: '二十二条编程路线在每个工作日同步更新，用中文短课持续积累技术栈。',
    url: '/',
    siteName: '渐进式编程课',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: '/og-v4.png', width: 1200, height: 630, alt: '二十二条路线渐进式编程课' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '渐进式编程课',
    description: '二十二条编程路线在每个工作日同步更新，用中文短课持续积累技术栈。',
    images: ['/og-v4.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
