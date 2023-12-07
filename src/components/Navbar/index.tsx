import generateNavItems from "./NavItems";
import { useState, useEffect } from "react";
import { Item } from "./NavItems";
import Logo from "../Logo";
import MenuIcon from "../MenuIcon";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../utils/responsive";
import MobileMenu from "./MobileMenu";
import Button from "../Button";
import { Link } from "react-router-dom";
import { AuthModalContext } from "../../Context/AuthModalToggleContext";
import { useContext } from "react";
const NavBar = () => {
  const [nav_items, setNavItems] = useState<Item[]>([]);
  const [activeMenu, setActiveMenu] = useState<Boolean>(false);
  const [scrollThreshold, setScrollThreshold] = useState<Boolean>(false);

  const { toggleAuthModal} = useContext(AuthModalContext);

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
          scrollThreshold ? "shadow-sm bg-white  " : ""
        } w-full fixed   px-4  top-0  z-40 transition duration-700 ease-in-out shadow-md `}
      >
        <div className="flex flex-row   py-8  mx-auto justify-between items-center  max-w-6xl  ">
          <Logo />
          {isMobile ? (
            <>
              <MenuIcon variant="open" setActiveMenu={setActiveMenu} />
            </>
          ) : (
            <ul className="flex flex-row gap-9  items-center justify-center">
              {nav_items.map((item: Item) => {
                return (
                  <Link className={item.styles} key={item.name} to={item.href}>
                    {item.name}
                  </Link>
                );
              })}
            </ul>
          )}
          <div className=" hidden  md:flex gap-4 flex-col md:flex-row">
            <Button
              theme="filled"
              text="SigIn"
              onClick={toggleAuthModal}
            ></Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
