import { ImLocation } from "react-icons/im";
import { FaAngleDown } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Button from "../Button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const BookingForm = () => {
  const [isPickUpDateOpen, setPickUpDate] = useState<boolean>(false);
  const [isReturnDateOpen, setReturnDate] = useState<boolean>(false);

  const togglePickUpDate = () => {
    setPickUpDate((prev) => !prev);
    setReturnDate(false);
  };
  const toggleReturnDate = () => {
    setReturnDate((prev) => !prev);
    setPickUpDate(false);
  };

  return (
   <section className="w-auto relative h-auto">
      <div className="mt-12  max-w-4xl mx-auto ">
      <div className="  flex flex-col   lg:flex-row items-center gap-8 py-8 mx-4 justify-center shadow-lg border rounded-md bg-white">
        <div className="flex flex-row  items-center gap-2 justify-center lg:border-r-2 lg:px-2">
          <span className="text-primary">
            <ImLocation />
          </span>
          <p className="">Choose Your Location</p>
          <span>
            <FaAngleDown />
          </span>
        </div>
        <div className="flex flex-row  items-center gap-2 justify-center lg:border-r-2 lg:px-2">
          <span className="text-primary">
            <SlCalender />
          </span>
          <p> Pick Up Date</p>
          <span onClick={togglePickUpDate} className={`${isPickUpDateOpen?" rotate-180 transiton duration-500 ease-out":""}`}>
            <FaAngleDown />
          </span>
          <div className="absolute top-32 lg:top-24 bg-white z-20">
            {isPickUpDateOpen && <Calendar />}
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 justify-center lg:border-r-2 lg:px-2">
          <span className="text-primary">
          
          </span>
          <p>Return Date</p>
          <span onClick={toggleReturnDate} className={`${isReturnDateOpen?" rotate-180 transiton duration-500 ease-out":""}`}>
            <FaAngleDown />
          </span>
          <div className="absolute top-44 lg:top-24 bg-white z-20">
            {isReturnDateOpen && <Calendar />}
          </div>
        </div>
        <div className=" max-w-xs">
        <Button text="Pick Your Ride" theme="filled"></Button>
          </div>
      </div>
    </div>
   </section>
  
  );
};

export default BookingForm;
