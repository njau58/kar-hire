import { FaAngleDown } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Button from "../Button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { useParams } from "react-router";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface BookingDetailsProps {
  vihicle_id: string | undefined;
  location: string;
  return_date?: Value;
  pickup_date?: Value;
}

const BookingForm = ({ hire_price }: any) => {
  const { Id } = useParams();

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

  const [pickUpDate, setPickUpDateValue] = useState<Value>();
  const [returnDate, setReturnDateValue] = useState<Value>();

  const [bookingDetails, setBookingDetails] = useState<BookingDetailsProps>({
    vihicle_id: Id,
    location: "",
  });

  const handleOnChange = (e: any) => {
    setBookingDetails({
      ...bookingDetails,
      return_date: returnDate,
      pickup_date: pickUpDate,

      [e.target.name]: e.target.value,
    });
  };

  const handlePickUpDateOnchange = (value: any) => {
    setPickUpDateValue(value);
  };
  const handleReturnDateOnchange = (value: any) => {
    setReturnDateValue(value);
  };

  return (
    <div className="w-auto relative h-auto ">
      <div className="mt-12  max-w-4xl mx-auto w-full h-[30rem]  ">
        <div className="  flex flex-col   items-center gap-9 py-8  justify-center h-full  w-full  border rounded-md bg-white">
          <div className="absolute top-4 left-4 flex flex-row items-center justify-center gap-2">
            <p className="text-xs">From</p>
            <p className="text-gray-900 font-semibold texxt-xl">
              KES {hire_price} /day
            </p>
          </div>
          <div className="  flex flex-row  items-center gap-2 justify-center  lg:px-2">
            <select
              id="location"
              name="location"
              onChange={handleOnChange}
              className="bg-gray-50 relative border border-gray-300 text-gray-900  rounded-md focus:ring-primary focus:border-primary block w-full p-2.5  "
            >
              <option selected>Choose Location</option>
              <option value="Nairobi">Nairobi</option>
              <option value="Mombasa">Mombasa</option>
              <option value="Nakuru">Nakuru</option>
            </select>
          </div>
          <div
            onClick={togglePickUpDate}
            className="flex  cursor-pointer flex-row bg-gray-50  border border-gray-300  items-center gap-2 justify-center  md:px-2  max-w-56 rounded-md p-2.5"
          >
            <span className="text-primary">
              <SlCalender />
            </span>
            <p className="text-gray-900"> Pick Up Date</p>
            <span
              className={`${
                isPickUpDateOpen
                  ? " rotate-180 transiton duration-500 ease-out"
                  : ""
              }`}
            >
              <FaAngleDown />
            </span>
          </div>
          <div className="absolute top-[13.8rem] md:top-[13.8rem] bg-white z-20">
            {isPickUpDateOpen && (
              <Calendar
                value={pickUpDate}
                onChange={handlePickUpDateOnchange}
              />
            )}
          </div>
          <div
            onClick={toggleReturnDate}
            className="flex cursor-pointer flex-row bg-gray-50  border border-gray-300  items-center gap-2 justify-center  md:px-2  max-w-56 rounded-md p-2.5"
          >
            <span className="text-primary">
              <SlCalender />
            </span>
            <p className="text-gray-900">Return Date</p>
            <span
              className={`${
                isReturnDateOpen
                  ? " rotate-180 transiton duration-500 ease-out"
                  : ""
              }`}
            >
              <FaAngleDown />
            </span>
          </div>
          <div className="absolute top-[18.9rem] md:top-[18.9rem] bg-white z-20">
            {isReturnDateOpen && (
              <Calendar
                value={returnDate}
                onChange={handleReturnDateOnchange}
              />
            )}
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
