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
  description: '二十八条编程与数字创作路线在每个工作日同步更新，用中文短课持续积累技能栈。',
  openGraph: {
    title: '渐进式编程课',
    description: '二十八条编程与数字创作路线在每个工作日同步更新，用中文短课持续积累技能栈。',
    url: '/',
    siteName: '渐进式编程课',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: '/og-v5.png', width: 1200, height: 630, alt: '二十八条路线渐进式编程与数字创作课' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '渐进式编程课',
    description: '二十八条编程与数字创作路线在每个工作日同步更新，用中文短课持续积累技能栈。',
    images: ['/og-v5.png'],
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
