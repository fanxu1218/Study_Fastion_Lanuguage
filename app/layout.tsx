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
  description: '工作日每天一节中文短课，持续学习 KMP、HarmonyOS、Python、Rust 与 Flutter。',
  openGraph: {
    title: '渐进式编程课',
    description: '工作日每天一节中文短课，持续学习 KMP、HarmonyOS、Python、Rust 与 Flutter。',
    url: '/',
    siteName: '渐进式编程课',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: '渐进式编程课' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '渐进式编程课',
    description: '工作日每天一节中文短课，持续学习 KMP、HarmonyOS、Python、Rust 与 Flutter。',
    images: ['/og.png'],
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
