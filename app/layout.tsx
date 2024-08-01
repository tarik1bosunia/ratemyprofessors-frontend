import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar, Footer } from "@/components/common";
import Provider from '@/redux/provider'
import { Setup } from "@/components/utils";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ratemyprofessors",
  description: "rate my professors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com"></meta>
      <body className={inter.className}>
        
        <Script src="https://accounts.google.com/gsi/client" async/>
        <Provider>
          <Setup />
          <div className="">{children}</div>
          
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
