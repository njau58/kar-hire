
import { Transition } from "@headlessui/react";
import {useContext} from 'react';
import { AuthModalContext } from "../../../Context/AuthModalToggleContext";


const AuthModal = () => {

    const {isOpen, toggleAuthModal} = useContext(AuthModalContext)

  return (
    <div
      className={`${
        isOpen
          ? "fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/70  w-full p-4   h-screen"
          : "hidden"
      }`}
    >
      <Transition
        show={isOpen}
        enter="transition-opacity duration-700"
        enterFrom="opacity-0"
        enterTo="opacity-1"
        leave="transition-opacity duration-700"
        leaveFrom="opacity-1"
        leaveTo="opacity-0"
      >
        <div className=" absolute max-h-[60vh] flex flex-col bg-white max-w-3xl my-auto md:mx-auto inset-0 mx-2 px-2 md:px-6  rounded-md ">
        
        </div>
      </Transition>
    </div>
  );
};

export default AuthModal;
