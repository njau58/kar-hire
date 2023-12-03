import generateNavItems, { Item } from "../Navbar/NavItems";
import { MdEmail } from "react-icons/md";

import { useState, useEffect } from "react";
// import { ScrollLink as Link } from "react-scroll";
import { FaFacebook } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import { MdLocalPhone } from "react-icons/md";
import SubscribeForm from "../SubscribeForm";

const Footer = () => {
  const [nav_items, setNavItems] = useState<Item[]>([]);

  useEffect(() => {
    setNavItems(generateNavItems());
  }, []);

  return (
    <section
      id="footer"
      className="w-full  bg-white relative bottom-0 mx-4 my-16"
    >
      <div className="w-full h-full max-w-6xl flex flex-col gap-6 md:flex-row items-start   md:justify-between mx-auto ">
        <div className=" flex flex-col gap-6">
          <h4 className="text-2xl md:4xl font-semibold">Quick Links</h4>

          <ul className="space-y-4 text-left">
            {nav_items?.map((item) => {
              return (
                <li className=" cursor-pointer hover:underline tansition duration-700 ease-in-out">
                  <a>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" flex flex-col gap-6">
          <h4 className="text-2xl md:4xl font-semibold text-start">Contacts</h4>
          <div className="flex flex-col space-y-4 items-start  ">
            <div className="flex flex-row space-x-4 items-center">
              <div className="text-xl text-primary">
                <MdLocalPhone />
              </div>
              <div className="text-sm">+254706338454 </div>
            </div>
            <div className="flex flex-row space-x-4 items-center">
              <div className="text-xl text-primary">
                <ImLocation />
              </div>
              <div className="text-sm"> Nairobi · Kenya.</div>
            </div>
            <div className="flex flex-row space-x-4 items-center">
              <div className="text-xl text-primary">
                <MdEmail />
              </div>
              <div className="text-sm">info@softleafapplications.co.ke</div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-12">
          <h4 className="text-2xl md:4xl font-semibold text-start">Social</h4>

          <div className=" flex flex-row gap-4 text-left">
            <div className="text-2xl bg-gray-50 p-2.5 border border-primary rounded-full  hover:scale-105 text-primary transform transition ease-in-out duration-400">
              <AiFillInstagram />
            </div>
            <div className="text-2xl bg-gray-50 p-2.5 border border-primary rounded-full  hover:scale-105 text-primary transform transition ease-in-out duration-400">
              <FaTelegram />
            </div>
            <div className="text-2xl bg-gray-50 p-2.5 border border-primary rounded-full  hover:scale-105 text-primary transform transition ease-in-out duration-400">
              <FaYoutube />
            </div>
            <div className="text-2xl bg-gray-50 p-2.5 border border-primary rounded-full  hover:scale-105 text-primary transform transition ease-in-out duration-400">
              <FaFacebook />
            </div>
          </div>
          <div className="">
            <h3 className="text-start font-semibold text-xl">
              {" "}
              Get The Latest From Us
            </h3>
            <SubscribeForm />
          </div>
        </div>
      </div>

      <hr className="my-12 bg-black w-full "></hr>

      <div className="">
        <p>
          Designed with{" "}
          <span className="inline-block text-primary">
            <FaHeart></FaHeart>
          </span>{" "}
          by Sofleafapplications{" "}
        </p>
      </div>
    </section>
  );
};

export default Footer;
