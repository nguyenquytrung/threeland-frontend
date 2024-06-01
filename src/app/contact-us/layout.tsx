import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Công ty du lịch quốc tế Threeland - Gray Line Vietnam, thương hiệu nhượng quyền từ Mỹ',
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
