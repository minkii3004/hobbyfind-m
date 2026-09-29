import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import { TopBar } from '@/features/navigation/components/top-bar';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'HobbyFind | 나에게 맞는 취미를 발견하세요',
    template: '%s | HobbyFind',
  },
  description:
    'HobbyFind에서 운동형, 지능형, 예술형 18가지 취미를 한눈에 둘러보고 나에게 맞는 취미를 찾아보세요. 로그인 없이 바로 탐색할 수 있습니다.',
  keywords: [
    '취미',
    '취미 추천',
    '취미 찾기',
    '취미 탐색',
    '운동형 취미',
    '지능형 취미',
    '예술형 취미',
    'HobbyFind',
  ],
  openGraph: {
    title: 'HobbyFind | 나에게 맞는 취미를 발견하세요',
    description: '운동부터 지능, 예술까지 18가지 취미를 한눈에 둘러보세요.',
    siteName: 'HobbyFind',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="bg-surface-0 font-sans text-ink-950 antialiased">
        <Providers>
          <TopBar />
          <main className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
