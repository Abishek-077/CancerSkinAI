import WelcomeSection from "../section/WelcomeSection";
import AboutSection from "../section/AboutSection";
import HowItWorksSection from "../section/HowItWorksSection";

const WelcomePage = () => {

  return (
    <div className="pb-6">
      <WelcomeSection />
      <AboutSection />
      <HowItWorksSection />
    </div>
  );
};

export default WelcomePage;
