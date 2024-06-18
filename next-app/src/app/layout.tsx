import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@/components/core/header'));
const Footer = dynamic(() => import('@/components/core/footer'));

const inter = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Best Vietnam Tour Operator | Threeland Travel',
  applicationName: 'Threeland Travel',
  description: 'This is description about the page',
  keywords: ['travel', 'Vietnam', 'tour', 'destination'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
