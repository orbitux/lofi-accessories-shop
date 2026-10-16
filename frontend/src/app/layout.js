import Providers from "@/Providers";
import "./globals.css";

export const metadata = {
  title: "فروشگاه آنلاین لوفی اکسسوری",
  description: "خرید انواع بدلیجات و اکسسوری بابهترین قیمت و کیفیت",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Providers>
            {children}
          </Providers>
        </main>
      </body>

    </html>
  );
}
