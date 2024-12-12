import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
