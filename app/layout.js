import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Coaching by Valeria Topai",
  description: "Explora tu potencial y alcanza tus metas con Valeria Topai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
