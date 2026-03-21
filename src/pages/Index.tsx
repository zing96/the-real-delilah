import AuthGate from "@/components/AuthGate";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ApproachSection from "@/components/ApproachSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <AuthGate>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ApproachSection />
          <GallerySection />
          <BookingSection />
        </main>
        <Footer />
      </div>
    </AuthGate>
  );
};

export default Index;
