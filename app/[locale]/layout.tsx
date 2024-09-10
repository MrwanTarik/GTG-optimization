import React from "react";
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "GTG® Engineering | Home of LLFA® Tape and LLFA® Smooth",
  description:
    "Applications PLUMBING / HVACSeals live leaks up to 150PSI, on water, Air, and Steam. NATURAL GASUsed by leading natural gas companies both locally and internationally. ELECTRICALOutstanding performance for high or low voltage insulation. TELECOMProvides an enduring seal under extreme environmental conditions. NEVER | GTG® Engineering",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale == "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="preload" href="/assets/images/hero-bg.webp" as="image" />
      </head>
      <body className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <ScrollToTop />
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
