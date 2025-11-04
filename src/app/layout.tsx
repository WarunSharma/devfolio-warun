import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Warun Sharma | Portfolio',
  description: 'Portfolio of Warun Sharma — Software Engineer specialized in React, Next.js, and Node.js.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
