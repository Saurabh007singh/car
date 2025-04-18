
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import GlobalProviderWrapper from "../providers/global-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Roodraa",
  description: "Roodra complete havan samagri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  h-screen 
          flex 
          flex-col overflow-x-hidden`}
      >
        <GlobalProviderWrapper >{children}</GlobalProviderWrapper>
       
      </body>
    </html>
  );
}
