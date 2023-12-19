

export interface Item {
  name: string;
  href: string;
  styles: string;

};


const generateNavItems = (): Item[] => {
  const itemStyles = "text-gray-700  transition duration-300 ease-in-out cursor-pointer hover:bg-primary/10 px-3 py-2 text-lg rounded-md font-bold md:text-sm ";

  const items: Item[] = [
    {
      name: "Home",
      href: "/",
     
      styles: itemStyles,
    },

    {
      name: "About Us",
      
      href: "about-us",
      styles: itemStyles,
    },
    {
      name: "Available Vihicles",
      
      href: "all-vihicles",
      styles: itemStyles,
    },
 

  ];

  return items;
};

export default generateNavItems;


