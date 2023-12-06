import { Link } from "react-router-dom";
import {car_logo} from "../../assets/images";
const Logo = () => {
  return (
    <Link to="/" className="flex flex-row items-center justify-center gap-2">
      <img src={car_logo} alt="logo" className=" object-contain   " />
      <p className="font-bold text-xl color-black">Kar Hire.</p>
    </Link>
  );
};

export default Logo;
