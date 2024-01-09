import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/layout/Header';
import '../globals.css';
import Footer from './components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex flex-col items-center p-24 bg-gradient-to-b from-red-50 to-red-200 w-screen h-screen overflow-y-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
