import Portfolio from '@/components/Portfolio';

export const metadata = {
  title: 'Nada Mohamed - Professional Portfolio',
  description: 'Premium portfolio showcasing professional services, expertise, and creative work',
  keywords: 'portfolio, interpreter, training, professional, nada mohamed',
  authors: [{ name: 'Nada Mohamed' }],
  openGraph: {
    title: 'Nada Mohamed - Professional Portfolio',
    description: 'Premium portfolio showcasing professional services and expertise',
    type: 'website',
  },
};

export default function Home() {
  return <Portfolio/>;
}
