
import { FaAngleDown } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Button from "../Button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const BookingForm = ({hire_price}:any) => {
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
    <div className="w-auto relative h-auto ">
      <div className="mt-12  max-w-4xl mx-auto w-full h-[30rem]  ">
        <div className="  flex flex-col   items-center gap-9 py-8  justify-center h-full  w-full shadow-lg border rounded-md bg-white">
          <div className="absolute top-4 left-4 flex flex-row items-center justify-center gap-2">
            <p className="text-xs">From</p>
            <p className="text-gray-900 font-semibold texxt-xl">KES {hire_price} /day</p>
          </div>
          <div className="  flex flex-row  items-center gap-2 justify-center  lg:px-2">
         

            <select
              id="location"
              className="bg-gray-50 relative border border-gray-300 text-gray-900  rounded-md focus:ring-red-500 focus:border-red-500 block w-full p-2.5  "
            >
         
              <option selected>Choose Location</option>
              <option value="Nairobi">Nairobi</option>
              <option value="Mombasa">Mombasa</option>
              <option value="Nakuru">Nakuru</option>
            </select>
          </div>
          <div   onClick={toggleReturnDate} className="flex flex-row bg-gray-50  border border-gray-300  items-center gap-2 justify-center  md:px-2  max-w-56 rounded-md p-2.5">
            <span className="text-primary">
              <SlCalender />
            </span>
            <p className="text-gray-900"> Pick Up Date</p>
            <span
              onClick={togglePickUpDate}
              className={`${
                isPickUpDateOpen
                  ? " rotate-180 transiton duration-500 ease-out"
                  : ""
              }`}
            >
              <FaAngleDown />
            </span>
            <div className="absolute top-[14.1rem] md:top-[14rem] bg-white z-20">
              {isPickUpDateOpen && <Calendar />}
            </div>
          </div>
          <div   onClick={toggleReturnDate} className="flex flex-row bg-gray-50  border border-gray-300  items-center gap-2 justify-center  md:px-2  max-w-56 rounded-md p-2.5">
            <span className="text-primary">
              <SlCalender />
            </span>
            <p className="text-gray-900">Return Date</p>
            <span
              onClick={toggleReturnDate}
              className={`${
                isReturnDateOpen
                  ? " rotate-180 transiton duration-500 ease-out"
                  : ""
              }`}
            >
              <FaAngleDown />
            </span>
            <div className="absolute top-[19.2rem] md:top-[19.1rem] bg-white z-20">
              {isReturnDateOpen && <Calendar />}
            </div>
          </div>
          <div className=" max-w-xs">
            <Button text="Book Your Ride" theme="filled"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
