import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nada Mohamed - Conference Interpreter & Communication Expert',
  description:
    'Professional portfolio of Nada Mohamed, a bilingual conference interpreter and soft skills trainer with 7+ years of experience bridging cultures and enabling communication across languages.',
  keywords: [
    'Interpreter',
    'Conference Interpretation',
    'Arabic Interpreter',
    'English Trainer',
    'Soft Skills',
    'Professional Communication',
    'Egypt',
  ],
  authors: [
    {
      name: 'Nada Mohamed',
      url: 'https://nadamohamed.com',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nadamohamed.com',
    title: 'Nada Mohamed - Conference Interpreter & Communication Expert',
    description: 'Bridging cultures, connecting minds, empowering voices across 7+ years of professional excellence',
    images: [
      {
        url: 'https://nadamohamed.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
