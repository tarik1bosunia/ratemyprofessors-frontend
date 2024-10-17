import type { Metadata } from "next";
import "@/styles/globals.css";
import { Footer } from "@/components/common";
import Provider from '@/redux/provider'
import { ThemeProvider } from "./providers";
import { Setup } from "@/components/utils";
import Script from "next/script";

import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';




export const metadata: Metadata = {
  title: "rateteach",
  description: "rateteach",
};

export default async function LocaleLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com"></meta>
      <body className="">
      <NextIntlClientProvider messages={messages}>
        <Script src="https://accounts.google.com/gsi/client" async/>
        <ThemeProvider>
          <Provider>
            <Setup />
            <div className="">{children}</div>
            
            <Footer />
          </Provider>
        </ThemeProvider>
      </NextIntlClientProvider>

      </body>
    </html>
  );
}