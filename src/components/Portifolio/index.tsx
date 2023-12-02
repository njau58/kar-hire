import SingleRide from "./SingleRide";
import vihicles, { CarProps } from "../../services/allVihicles";
import { useState } from "react";
import {
  coupe,
  hatchback,
  pickup,
  sedan,
  station_wagon,
  suv,
  van,
} from "../../assets/images";

export interface BrandProps {
  type: string;
  image?: any;
}

const Portifolio: React.FC = () => {
  const [filteredVihicles, setVihicles] = useState<CarProps[]>(vihicles);

  const brands: BrandProps[] = [
    {
      type: "Suv",
      image: suv,
    },
    {
      type: "Sedan",
      image: sedan,
    },

    {
      type: "Hatchback",
      image: hatchback,
    },

    {
      type: "StationWagon",
      image: station_wagon,
    },
    {
      type: "Pickup",
      image: pickup,
    },
    {
      type: "Van",
      image: van,
    },
    {
      type: "Coupe",
      image: coupe,
    },
  ];

  const handleBrandClick = (brand_name: string) => {
    const FilteredBrands = vihicles.filter((vihicle) => {
      return vihicle.type === brand_name;
    });

    setVihicles(FilteredBrands);
  };

  return (
    <section className=" relative  my-24 max-w-6xl lg:mx-auto px-4 flex items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-4   w-full mx-auto  ">
        <p className="text-center font-bold text-primary">Choose Your Ride</p>
        <h2 className="text-3xl text-gray-950 font-bold g:text-5xl">
          Explore Our Rides By Type
        </h2>

        <div
          className="grid grid-flow-col grid-rows-2 pb-3 overflow-x-auto overflow-y-hidden  py-4   lg:w-[90%]  w-full  md:grid-rows-1 gap-x-4 gap-y-8
          hover:scrollbar-thumb-primary/80 scrollbar-thumb-rounded-lg scrollbar-track-red-50  scrollbar-thumb-primary 
        scrollbar-thin"
        >
          {brands?.map((brand, index) => {
            return (
              <a
                key={index}
                onClick={() => handleBrandClick(brand.type)}
                className="flex pb-4 w-44 flex-col h-36  items-center duration-200 ease-in-out border-[0.5px] hover:border-[1px] border-gray-300 rounded-md cursor-pointer hover:scale-105 "
              >
                <img
                  alt={brand.type}
                  loading="lazy"
                  width="150"
                  height="150"
                  decoding="async"
                  data-nimg="1"
                  className="w-"
                  src={brand.image}
                ></img>
                <span className="relative font-semibold capitalize -top-8 ">
                  {brand.type}
                </span>
              </a>
            );
          })}
        </div>

        {/* list of all available/filtered cars */}

        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8  mt-16   max-w-6xl w-full overflow-hidden  ">
          {filteredVihicles.length === 0 ? (
            <div className=" col-span-3 text-center w-full h-full  mx-auto
            mb-16   max-w-6xl">

              <p className="text-center text-xl">No Vihicle(s) of the selected type at the moment.</p>


            </div>
          ) : (
            <>
              {" "}
              {filteredVihicles?.map((vihicle, index) => {
                return (
                  <SingleRide
                    key={index}
                    imageSrc={vihicle.imageSrc}
                    type={vihicle.type}
                    vihicle_name={vihicle.vihicle_name}
                    transmission_type={vihicle.transmission_type}
                    badge={vihicle.badge}
                    hire_price={vihicle.hire_price}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portifolio;
