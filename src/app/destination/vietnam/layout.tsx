import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import '../../globals.css';
import Header from '@/components/core/header';
import Footer from '@/components/core/footer';

const inter = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Holidays to Vietnam - Vietnam Tours with affordable Vietnam holiday packages',
  applicationName: 'Threeland Travel',
  description: 'This is description about the page',
  keywords: ['travel', 'Vietnam', 'tour', 'destination'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
