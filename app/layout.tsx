import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "App Builder - Build Apps Without Code",
  description: "Create professional applications without writing code. Drag, drop, and deploy your dream app in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}