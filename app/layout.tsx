import type { Metadata } from 'next';
import { Syne, Architects_Daughter } from 'next/font/google';
import './globals.css';
import ZoomManager from '@/components/Manager/ZoomManager';
import ScrollToTopManager from '@/components/Manager/ScrollToTopManager';
import ReloadResizeManager from '@/components/Manager/ReloadResizeManager';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Providers } from './provider';

const fontSyne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne', // CSS variable for Syne
});

const fontArchitectsDaughter = Architects_Daughter({
  subsets: ['latin'],
  weight: ['400'], // This font only has a 400 weight
  display: 'swap',
  variable: '--font-architects-daughter', // CSS variable for Architects Daughter
});

export const metadata: Metadata = {
  title: 'Sandy Mo.',
  description:
    'Sandy Mo. is a personal website showcasing my work and interests.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        className={`${fontSyne.variable} ${fontArchitectsDaughter.variable} antialiased`}
      >
        <Providers>
          {process.env.NODE_ENV === 'production' && (
            <>
              <ZoomManager />
              <ScrollToTopManager />
              <SpeedInsights />
              <ReloadResizeManager />
            </>
          )}
          {children}
        </Providers>
      </body>
    </html>
  );
}
