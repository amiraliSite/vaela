import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/site/theme-provider";

export const metadata: Metadata = {
  title: "VAELA — Premium Leather Bags & Backpacks | Travel with Grace",
  description:
    "VAELA. Premium hand-stitched shoulder bags and backpacks in vegetable-tanned leather. Crafted slowly, built to last.",
  keywords: [
    "VAELA",
    "leather bag",
    "backpack",
    "shoulder bag",
    "vegetable-tanned",
    "hand-stitched",
    "premium",
  ],
  authors: [{ name: "VAELA Studio" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "VAELA — Travel with Grace",
    description:
      "Premium hand-stitched leather bags & backpacks. Crafted slowly, built to last.",
    siteName: "VAELA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        {/* External typography via Google Fonts CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..900&family=Inter:wght@300..900&family=JetBrains+Mono:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SonnerToaster position="top-center" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
