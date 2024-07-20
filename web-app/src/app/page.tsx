import {
  Footer,
  Header,
  HeroSection,
  PricingSection,
  StepsSection,
} from "./_libs/components/components";

const LandingPage: React.FC = async () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-y-[100px] grow">
        <HeroSection />
        <StepsSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
