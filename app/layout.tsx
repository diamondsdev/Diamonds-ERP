import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1011' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Diamonds ERP — Your Business, Connected',
  description:
    'Intelligent, unified enterprise resource planning software connecting operations, inventory, finance, and workflows in one precision platform.',
  openGraph: {
    title: 'Diamonds ERP — Your Business, Connected',
    description:
      'Intelligent, unified enterprise resource planning software connecting operations, inventory, finance, and workflows in one precision platform.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diamonds ERP — Your Business, Connected',
    description:
      'Intelligent, unified enterprise resource planning software connecting operations, inventory, finance, and workflows in one precision platform.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased selection:bg-[#3478f6]/15 selection:text-[#3478f6]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
