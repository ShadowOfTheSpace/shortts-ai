import {
  Footer,
  GallerySection,
  Header,
  HeroSection,
  PricingSection,
  StepsSection,
} from "./_libs/components/components";

const LandingPage: React.FC = async () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-y-[50px] sm:gap-y-[100px] grow">
        <HeroSection />
        <GallerySection />
        <StepsSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
