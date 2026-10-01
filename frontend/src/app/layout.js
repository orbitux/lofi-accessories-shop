import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Hero from "@/components/home/Hero";

export const metadata = {
  title: "فروشگاه آنلاین لوفی اکسسوری",
  description: "خرید انواع بدلیجات و اکسسوری بابهترین قیمت و کیفیت",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
      <Navbar />
      <Hero />
    </html>
  );
}
