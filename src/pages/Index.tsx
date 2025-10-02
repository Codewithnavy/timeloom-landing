
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import FeaturesShowcaseSection from '../components/FeaturesShowcaseSection';
import DemoVideoSection from '../components/DemoVideoSection';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesShowcaseSection />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
