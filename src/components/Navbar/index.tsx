import generateNavItems from "./NavItems";
import { useState, useEffect } from "react";
import { Item } from "./NavItems";
import Logo from "../Logo";
import MenuIcon from "../MenuIcon";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../utils/responsive";
import MobileMenu from "./MobileMenu";
import { CiSearch } from "react-icons/ci";
import Button from "../Button";
const NavBar = () => {
  const [nav_items, setNavItems] = useState<Item[]>([]);
  const [activeMenu, setActiveMenu] = useState<Boolean>(false);
  const [scrollThreshold, setScrollThreshold] = useState<Boolean>(false);

  console.log(scrollThreshold);

  //checks for when scrolled 100px on y-axis

  const handleThresholdChange = () => {
    if (window.scrollY > 20) {
      setScrollThreshold(true);
    } else {
      setScrollThreshold(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleThresholdChange);
  }, [handleThresholdChange]);

  useEffect(() => {
    setNavItems(generateNavItems());
  }, []);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  return (
    <>
      {activeMenu && isMobile && <MobileMenu setActiveMenu={setActiveMenu} />}
      <nav
        className={` ${
          scrollThreshold ? "shadow-sm bg-white/30 backdrop-blur-lg  " : ""
        } w-full fixed   px-4  top-0  z-40 transition duration-700 ease-in-out  `}
      >
        <div className="flex     flex-row   py-8  mx-auto justify-between items-center  max-w-6xl  ">
          <Logo />
          {isMobile ? (
            <>
              <MenuIcon variant="open" setActiveMenu={setActiveMenu} />
            </>
          ) : (
            <ul className="flex flex-row gap-9  items-center justify-center">
              {nav_items.map((item: Item) => {
                return (
                  <li className={item.styles} key={item.name}>
                    {item.name}
                  </li>
                );
              })}
              {/* <div className="text-md p-1.5 text-center text-white  bg-red-500 rounded-full hover:scale-110 transition duration-300  ease-in-out">
                <CiSearch />
              </div> */}
           

            </ul>
          )}
          <div className=" hidden  md:flex gap-4 flex-col md:flex-row">
          <Button theme="text" text="LogIn"></Button>
              <Button theme="filled" text="SignUp"></Button>
          </div>
          
        </div>
        
      </nav>
    </>
  );
};

export default NavBar;
