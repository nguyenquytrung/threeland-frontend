import type { Metadata } from 'next';

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
