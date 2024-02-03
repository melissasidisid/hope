import { Inter } from "next/font/google";
import "./globals.css";
import UseClient from "./component/useClient";
import { Head, Html, Main, NextScript } from "next/document";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "gloria",
  description: "this is a wood fabric",
};

export default function RootLayout({ children }) {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <body className={inter.className}>
        <UseClient />
        {children}
      </body>
    </Html>
  );
}
