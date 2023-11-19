import generateNavItems from "./NavItems";
import { useState, useEffect } from "react";
import { Item } from "./NavItems";
import MenuIcon from "../MenuIcon";

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
      </div>
    </div>
  );
};

export default MobileMenu;