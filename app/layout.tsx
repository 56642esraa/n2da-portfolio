import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nada Mohamed - Professional Portfolio',
  description: 'Premium portfolio showcasing professional services, expertise, and creative work',
  keywords: ['portfolio', 'interpreter', 'training', 'professional'],
  authors: [{ name: 'Nada Mohamed' }],
  creator: 'Nada Mohamed',
  openGraph: {
    title: 'Nada Mohamed - Professional Portfolio',
    description: 'Premium portfolio showcasing professional services and expertise',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
