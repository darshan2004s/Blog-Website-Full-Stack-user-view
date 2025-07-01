import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Make sure this path is correct based on your structure
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SearchProvider } from '@/lib/SearchContext';
import { ThemeProvider } from '@/lib/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Darshan blog',
  description: 'A minimalist blog built with Next.js and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider>
          <SearchProvider>
            <Header />
              {children}
          </SearchProvider>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
