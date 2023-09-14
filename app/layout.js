import "./globals.css";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coaching by Valeria Topai",
  description: "Valeria Topai Coaching Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
