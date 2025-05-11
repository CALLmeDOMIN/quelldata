import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
// import { ReactScan } from "../components/ReactScan";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quelldata",
  description:
    "Decentralized data platform for AI. Order, validate & earn with crowdsourced, high-quality datasets. On-chain proof-of-quality.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/quell-favicon-dark.ico", media: "(prefers-color-scheme: dark)" },
      {
        url: "/quell-favicon-light.ico",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <script src="https://unpkg.com/react-scan/dist/auto.global.js" />
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ReactScan /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
