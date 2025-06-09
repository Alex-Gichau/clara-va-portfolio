import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google"; // 1. Import Pacifico
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const pacifico = Pacifico({ // 2. Configure Pacifico
  subsets: ['latin'],
  weight: '400', // Pacifico only has weight 400
  variable: '--font-pacifico', // Define a CSS variable
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clara Njeri | Portfolio",
  description: "Virtual Assistant Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`} // 3. Add Pacifico variable to body
      >
        {children}
      </body>
    </html>
  );
}
