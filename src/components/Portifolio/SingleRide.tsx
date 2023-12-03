import { FaGears } from "react-icons/fa6";
import { SlPeople } from "react-icons/sl";

import { IoMdSpeedometer } from "react-icons/io";
import Badge from "../Badge";
import Button from "../Button";
import { CarProps } from "../../services/allVihicles";

const SingleRide = ({
  imageSrc,
  vihicle_name,
  transmission_type,
  badge,
  hire_price,
}: CarProps) => {

  return (
    <div className="shadow-lg  relative  rounded-lg border bg-white max-w-lg mx-auto  w-full  ">
      <div className="h-[18rem] ">
        <div className="absolute right-0">
          
          <Badge variant={badge} />
        </div>
        <div className=" overflow-hidden h-full w-full">
        <img
          src={imageSrc}
          decoding="async"
          loading="lazy"
          className="rounded-t-lg h-full w-full object-cover    transition duration-500 ease-in-out  hover:scale-110"
        />

        </div>
     
      </div>

      <div className="flex flex-col items-start gap-3 mt-4 p-4">
        <h4 className="font-semibold text-xl">{vihicle_name}</h4>
        <div className="flex flex-row items-start justify-start px-2 w-full gap-4">
          <div>
            <div className="p-3 text-xl border rounded-lg">
              <SlPeople />
            </div>
            <span className="">4</span>
          </div>
          <div>
            <div className="p-3 text-xl border rounded-lg">
              <FaGears />
            </div>
            <span className="">{transmission_type}</span>
          </div>
      
          <div>
            <div className="p-3 text-xl border rounded-lg">
              <IoMdSpeedometer />
            </div>
            <span className="">15km/ltr</span>
          </div>
        </div>
        <hr className="w-full"></hr>

        <p>
          <span className="font-bold text-primary">KSH {hire_price}</span> /day
        </p>
        <div className="w-full flex justify-center">
          {" "}
          <Button theme="filled" text="Book Now" />
        </div>
      </div>
    </div>
  );
};

export default SingleRide;
