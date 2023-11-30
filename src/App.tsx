import "./App.css";
import BookingForm from "./components/BookingForm";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import HowWorks from "./components/HowWorks";
import NavBar from "./components/Navbar";
import Portifolio from "./components/Portifolio";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <BookingForm />
      <HowWorks />
    <Portifolio/>
    <CTA/>
    
    </main>
  );
}

export default App;
