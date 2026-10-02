import "./globals.css";

export const metadata = {
  title: "فروشگاه آنلاین لوفی اکسسوری",
  description: "خرید انواع بدلیجات و اکسسوری بابهترین قیمت و کیفیت",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
