

export interface Item {
  name: string;
  href: string;
  offset: number | {};
  styles: string;

};


const generateNavItems = (): Item[] => {
  const itemStyles = "text-gray-700  transition duration-300 ease-in-out cursor-pointer hover:text-red-500 text-lg font-bold md:text-sm ";

  const items: Item[] = [
    {
      name: "Home",
      href: "#",
      offset: {},
      styles: itemStyles,
    },

    {
      name: "About Us",
      offset: {},
      href: "#",
      styles: itemStyles,
    },
    {
      name: "Services",
      offset: {},
      href: "#",
      styles: itemStyles,
    },
    {
      name: "Models",
      offset: {},
      href: "#",
      styles: itemStyles,
    },
    {
      name: "Blog",
      offset: {},
      href: "#",
      styles: itemStyles,
    },
    {
      name: "Contact Us",
      offset: {},
      href: "#",
      styles: itemStyles,
    },

  ];

  return items;
};

export default generateNavItems;


