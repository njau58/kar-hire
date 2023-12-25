import Footer from "../Footer";
import NavBar from "../Navbar";
import { ReactNode } from "react";
import ChatWidget from "../ChatWidget";
import AuthModal from "../Modals/AuthModal";

interface ComponentProps {
  children: ReactNode;
}

const Main: React.FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <NavBar />

      {children}
      <AuthModal/>
      <ChatWidget/>
      <Footer />
    </>
  );
};

export default Main;
