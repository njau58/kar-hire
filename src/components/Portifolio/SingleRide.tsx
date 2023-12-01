import { FaCarBurst, FaGears } from "react-icons/fa6";
import { SlPeople } from "react-icons/sl";
import { CiBag1 } from "react-icons/ci";
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

  console.log(typeof(badge))
  return (
    <div className="shadow-lg  relative  rounded-lg border max-w-2xl ">
      <div className="h-[9rem] ">
        <div className="absolute right-0">
          
          <Badge variant={badge} />
        </div>
        <div className=" overflow-hidden h-full w-full">
        <img
          src={imageSrc}
          className="rounded-t-lg h-full w-full object-cover   transition duration-500 ease-in-out  hover:scale-110"
        />

        </div>
     
      </div>

      <div className="flex flex-col items-start gap-3 mt-4 p-4">
        <h4 className="font-semibold text-xl">{vihicle_name}</h4>
        <div className="flex flex-row gap-4">
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
              <CiBag1 />
            </div>
            <span className="">7</span>
          </div>
          <div>
            <div className="p-3 text-xl border rounded-lg">
              <FaCarBurst />
            </div>
            <span className="">4</span>
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
