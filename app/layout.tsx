import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar, Footer } from "@/components/common";
import Provider from '@/redux/provider'
import { Setup } from "@/components/utils";


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
      <body className={inter.className}>
        <Provider>
          <Setup />
          <div className="">{children}</div>

          <Footer />
        </Provider>
      </body>
    </html>
  );
}
