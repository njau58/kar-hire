import Footer from "../Footer";
import NavBar from "../Navbar";
import { ReactNode } from "react";

interface ComponentProps {
  children: ReactNode;
}

const Main: React.FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <NavBar />

      {children}
      <Footer />
    </>
  );
};

export default Main;
