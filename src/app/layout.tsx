import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real Time Price Tracker",
  description:
    "RealTimePriceTracker is a web application built with Next.js and React. It provides real-time tracking and display of selected cryptocurrencies. The application uses WebSockets for real-time updates and Zustand for state management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col p-24">{children}</body>
    </html>
  );
}
