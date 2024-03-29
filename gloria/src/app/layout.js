import { Inter } from "next/font/google";
import "./globals.css";
import UseClient from "./component/useClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "gloria/جلوريا",
  description: "this is a wood fabric",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="gl.png" />
      </head>
      <body className={inter.className}>
        <UseClient />
        {children}
      </body>
    </html>
  );
}
