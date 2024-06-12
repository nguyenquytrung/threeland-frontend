import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'THREELAND HOTEL BOOKING',
  applicationName: 'Threeland Travel',
  description: 'This is description about the page',
  keywords: ['travel', 'Vietnam', 'tour', 'destination', 'halong', 'cruises'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
