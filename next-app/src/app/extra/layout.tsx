import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Threeland Travel Extra Service: The Benefits of Booking with Us',
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
