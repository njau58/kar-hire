import { createContext, useState } from "react";

export const AuthModalContext = createContext();

export const AuthModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAuthModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <AuthModalContext.Provider value={{ toggleAuthModal, isOpen }}>
      {children}
    </AuthModalContext.Provider>
  );
};
