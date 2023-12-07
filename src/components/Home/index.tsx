import CTA from "../CTA";
import Hero from "../Hero";
import HowWorks from "../HowWorks";
import Main from "../Layouts/Main";
import AuthModal from "../Modals/AuthModal";
import Portifolio from "../Portifolio";

const Home = () => {
  return (
    <Main>
      <>
        <AuthModal />

        <Hero />
        <HowWorks />
        <Portifolio />
        <CTA />
      </>
    </Main>
  );
};

export default Home;
