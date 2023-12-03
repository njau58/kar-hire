import { Link } from "react-router-dom";

interface LinkProps {
  text: string;
  to: string;
}

const CustomLink: React.FC<LinkProps> = ({ to, text }) => {
  return (
    <Link
      className=" bg-red-500 px-6 py-2 rounded-md border-2 border-solid
    text-white border-transparent transition-all duration-300 w-full
      ease-in-out hover:bg-transparent hover:border-red-500 hover:text-red-500"
      to={to}
    >
      <a>{text}</a>
    </Link>
  );
};

export default CustomLink;
