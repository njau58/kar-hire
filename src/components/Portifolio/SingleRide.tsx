import React from "react";
import { porche } from "../../assets/images";
import {
  FaCarBurst,
  FaGear,
  FaGears,
  FaPeopleGroup,
  FaUserGear,
} from "react-icons/fa6";
import { SlBag, SlPeople } from "react-icons/sl";
import { CiBag1 } from "react-icons/ci";
import Badge from "../Badge";
import Button from "../Button";

const SingleRide = () => {
  return (
    <div className="shadow-lg container rounded-lg border max-w-96 ">
      <div className="h-[15rem] relative">
        <div className="absolute right-0">
        <Badge variant='Hire'/>

        </div>
        <img src={porche} className="rounded-t-lg h-full w-full object-cover   transition duration-1000 ease-in-out " />
      </div>

      <div className="flex flex-col items-start gap-4 mt-4 p-6">
        <h4 className="font-semibold text-xl">Toyota Noah</h4>
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
            <span className="">auto</span>
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

        <p><span className="font-bold text-primary">KSH 7,000</span> /day</p>
       <div className="w-full flex justify-center"> <Button theme='filled' text='Book Now'/></div> 
      </div>
    

    
    </div>
  );
};

export default SingleRide;
