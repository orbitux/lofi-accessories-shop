import AboutSection from "@/components/home/AboutSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoriesSection />
      <FeaturedProducts />
      <AboutSection />
      <Footer />
    </>
  );
}
