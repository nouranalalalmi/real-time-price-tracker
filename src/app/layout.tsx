import type { Metadata } from 'next';

import './globals.css';

import { WebSocketStatus } from '@/components/webSocketStatus/WebSocketStatus';

import Providers from './providers';

export const metadata: Metadata = {
  title: 'Real Time Price Tracker',
  description:
    'RealTimePriceTracker is a web application built with Next.js and React. It provides real-time tracking and display of selected cryptocurrencies. The application uses WebSockets for real-time updates and Zustand for state management.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <WebSocketStatus />
          <div className="flex min-h-screen flex-col p-5 md:p-24">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
