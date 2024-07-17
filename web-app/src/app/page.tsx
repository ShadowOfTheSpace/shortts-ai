import { Header, HeroSection } from "./_libs/components/components";

const LandingPage: React.FC = async () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <HeroSection />
      </main>
    </>
  );
};

export default LandingPage;
