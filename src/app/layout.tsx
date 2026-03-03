import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://manita.vercel.app'),
  title: {
    default: 'ManiTrip - Sessiz ve Romantik Kafe Rehberi',
    template: '%s | ManiTrip',
  },
  description:
    "Türkiye'nin 81 ilinde gerçek, sessiz ve loş ışıklı kafeleri keşfedin. Şehir bazlı filtreleme, tavsiye köşesi ve ilişki chatbotu ile mekan bulmayı kolaylaştırın.",
  keywords: [
    'kafe önerisi',
    'sessiz kafe',
    'romantik kafe',
    'Türkiye kafe rehberi',
    'İstanbul kafe',
    'Ankara kafe',
    'İzmir kafe',
    'date mekanı',
    'loş ışıklı kafe',
    'ManiTrip',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://manita.vercel.app',
    siteName: 'ManiTrip',
    title: 'ManiTrip - Sessiz ve Romantik Kafe Rehberi',
    description:
      "Türkiye'nin 81 ilinde gerçek, sessiz ve loş ışıklı kafeleri keşfedin.",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'ManiTrip Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ManiTrip - Sessiz ve Romantik Kafe Rehberi',
    description:
      "Türkiye'nin 81 ilinde gerçek, sessiz ve loş ışıklı kafeleri keşfedin.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
