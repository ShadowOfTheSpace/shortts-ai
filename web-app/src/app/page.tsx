import {
  Header,
  HeroSection,
  StepsSection,
} from "./_libs/components/components";

const LandingPage: React.FC = async () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-y-[100px]">
        <HeroSection />
        <StepsSection />
      </main>
    </>
  );
};

export default LandingPage;
