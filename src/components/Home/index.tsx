import CTA from "../CTA";
import Hero from "../Hero";
import HowWorks from "../HowWorks";
import Main from "../Layouts/Main";
import Portifolio from "../Portifolio";

const Home = () => {
  return (
    <Main>
      <>
        <Hero />
        <HowWorks />
        <Portifolio />
        <CTA />
      </>
    </Main>
  );
};

export default Home;
