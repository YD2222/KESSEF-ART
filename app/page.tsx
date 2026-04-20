import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import InfoStrip from "@/components/home/InfoStrip";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ManifestoSection from "@/components/home/ManifestoSection";
import PartnersSection from "@/components/home/PartnersSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <InfoStrip />
        <FeaturedProducts />
        <ManifestoSection />
        <PartnersSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
