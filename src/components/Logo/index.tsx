import {car_logo} from "../../assets/images";
const Logo = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <img src={car_logo} alt="logo" className=" object-contain   " />
      <p className="font-bold text-xl color-black">Kar Hire.</p>
    </div>
  );
};

export default Logo;
