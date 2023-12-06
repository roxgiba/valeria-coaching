import "./globals.css";
import { Montserrat } from "next/font/google";
import Layout from "../components/Layout";

const montserrat = Montserrat({
  weight: ["300", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Coaching by Valeria Topai",
  description: "Valeria Topai Coaching Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
