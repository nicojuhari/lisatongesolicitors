import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComp from "@/components/Header";
import FooterComp from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solicitor in Worsley, Manchester | Lisa Tonge Solicitors",
  description: "Solicitor in Worsley, Manchester offering personalised Conveyancing, Wills, Lasting Power of Attorney, and Business Legal Document drafting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="LisaTonge" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderComp />
        <main>
          {children}
        </main>
        <FooterComp />
      </body>
    </html>
  );
}
