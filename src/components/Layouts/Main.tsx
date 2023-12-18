import Footer from "../Footer";
import NavBar from "../Navbar";
import { ReactNode } from "react";
import ChatWidget from "../ChatWidget";

interface ComponentProps {
  children: ReactNode;
}

const Main: React.FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <NavBar />

      {children}
      <ChatWidget/>
      <Footer />
    </>
  );
};

export default Main;
