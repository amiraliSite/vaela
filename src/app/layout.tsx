import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/site/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VAELA — کوله و کیف دوشی پریمیوم | سفر با وقار",
  description:
    "VAELA، برند کوله و کیف دوشی پریمیوم. چرم طبیعی، دست‌دوز، طراحی مینیمال. ساخته‌شده برای سفرهایی که به یاد می‌مانند.",
  keywords: [
    "کوله",
    "کیف دوشی",
    "چرم طبیعی",
    "کیف دست‌دوز",
    "VAELA",
    "bag",
    "backpack",
    "leather",
  ],
  authors: [{ name: "VAELA Studio" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "VAELA — سفر با وقار",
    description: "کوله و کیف دوشی پریمیوم، دست‌دوز از چرم طبیعی.",
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
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazirmatn.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
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
