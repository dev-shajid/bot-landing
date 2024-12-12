import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Head from "next/head";
import type { Metadata } from "next";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Attensys | AI",
  description: "Attensys is a platform that provides AI-powered solutions to businesses.",
  icons: '/icons/favicon.ico',
  openGraph: {
    title: "Attensys | AI",
    description: "Attensys is a platform that provides AI-powered solutions to businesses.",
    images: [
      {
        url: "/icons/landing.png",
        width: 1200,
        height: 630,
        alt: "Attensys | AI",
      },
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'Attensys',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@attensys',
    title: "Attensys | AI",
    description: "Attensys is a platform that provides AI-powered solutions to businesses.",
    images: '/icons/landing.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title key="title">Attensys | AI</title>
        <meta key="keywords" name="keywords" content={`Attensys, AI Chatbot`} />
        <meta key="description" name="description" content={"Attensys is a platform that provides AI-powered solutions to businesses."} />
        <meta key="og-title" property="og:title" content="Attensys | AI" />
        <meta key="og-description" property="og:description" content={"Attensys is a platform that provides AI-powered solutions to businesses."} />
        <meta key="og-url" property="og:url" content={`https://chat-bot-attensys.vercel.app`} />
        <meta key="twitter-title" name="twitter:title" content={"Attensys | AI"} />
        <meta key="twitter-description" name="twitter:description" content={"Attensys is a platform that provides AI-powered solutions to businesses."} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@attensys" />
        <meta name="twitter:image" content={`https://chat-bot-attensys.vercel.app/icons/landing.png/`} />
        <link rel="canonical" href="https://chat-bot-attensys.vercel.app/" />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-black text-foreground antialiased max-w-[100dvw] !overflow-x-hidden",
          font.className
        )}
      >
        {children}

        <Script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></Script>
        <Script src="https://files.bpcontent.cloud/2024/12/10/15/20241210153911-5PNF5LKA.js"></Script>
      </body>
    </html>
  );
}
