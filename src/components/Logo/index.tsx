import { Link } from "react-router-dom";
import { FaCar } from "react-icons/fa6";
const Logo = () => {
  return (
    <Link to="/" className="flex flex-row items-center justify-center gap-2">
     <span className="text-2xl p-2 rounded-full bg-black/10 "><FaCar/></span>
      <p className="font-bold text-xl color-black">Kar Hire</p>
    </Link>
  );
};

export default Logo;
