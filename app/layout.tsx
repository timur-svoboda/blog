import { Analytics } from '@vercel/analytics/react';
import { Montserrat } from 'next/font/google'
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
