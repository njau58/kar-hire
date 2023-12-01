import generateNavItems from "./NavItems";
import { useState, useEffect } from "react";
import { Item } from "./NavItems";
import MenuIcon from "../MenuIcon";
import Button from "../Button";

interface Props {
  setActiveMenu: React.Dispatch<React.SetStateAction<Boolean>>;
}
const MobileMenu: React.FC<Props> = ({ setActiveMenu }) => {
  const [nav_items, setNavItems] = useState<Item[]>([]);

  useEffect(() => {
    setNavItems(generateNavItems());
  }, []);
  return (
    <div className=" fixed top-0 flex items-center justify-center z-50 min-h-screen w-full   bg-red-600/5 backdrop-blur-xl ">
      <MenuIcon variant="close" setActiveMenu={setActiveMenu} />

      <div className="flex flex-col gap-9  ">
        {nav_items.map((item: Item) => {
          return (
            <ul key={item.name}>
              <li className={item.styles}>{item.name}</li>
            </ul>
          );
        })}
           <div className=" flex flex-col gap-4 mt-12 w-full">
      <Button theme="text" text="LogIn"></Button>
              <Button theme="filled" text="SignUp"></Button>
      </div>
      </div>

   
    </div>
  );
};

export default MobileMenu;
