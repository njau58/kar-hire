import React from "react";
import SingleRide from "./SingleRide";
import vihicles, { CarProps } from "../../services/allVihicles";
import { useState } from "react";
import CarTypes from "../CarTypes";

const Portifolio: React.FC = () => {
  const [filteredVihicles, setVihicles] = useState<CarProps[]>(vihicles);

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
        {/* 
list of available car types */}
        <CarTypes handleCarTypeClick={handleBrandClick} />

        {/* list of all available/filtered cars */}

        <div className="mx-auto grid grid-cols-1  gap-8 sm:grid-cols-2 md:grid-cols-3  mt-16   max-w-6xl w-full overflow-hidden  ">
          {filteredVihicles.length === 0 ? (
            <div
              className=" col-span-3 text-center w-full h-full  mx-auto
            mb-16   max-w-6xl"
            >
              <p className="text-center ">
                No Vihicle(s) of the selected type at the moment.
              </p>
            </div>
          ) : (
            <>
              {" "}
              {filteredVihicles?.map((vihicle) => {
                return (
                  <SingleRide
                  Id={vihicle.Id}
                    key={vihicle.Id}
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
