import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "فروشگاه آنلاین لوفی اکسسوری",
  description: "خرید انواع بدلیجات و اکسسوری بابهترین قیمت و کیفیت",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  );
}
