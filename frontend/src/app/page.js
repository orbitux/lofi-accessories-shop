import AboutSection from "@/components/home/AboutSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import ServiceUs from "@/components/home/ServiceUs";
import SpecialOffer from "@/components/home/SpecialOffer";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";


export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <FeaturedProducts />
      <AboutSection />
      <SpecialOffer />
      <ServiceUs />
    </>
  );
}
