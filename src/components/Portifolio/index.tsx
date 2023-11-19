import { SiToyota } from "react-icons/si";
import { SiHonda } from "react-icons/si";
import { SiMazda } from "react-icons/si";
import { SiNissan } from "react-icons/si";
import SingleRide from "./SingleRide";
import vihicles, { CarProps } from "../../services/allVihicles";
import { useState } from "react";


export interface BrandProps {
  brand_name: string;
  logo?: any;
}

const Portifolio: React.FC<BrandProps> = () => {
  const [filteredVihicles, setVihicles] = useState<CarProps[]>(vihicles);

  const brands: BrandProps[] = [
    {
      brand_name: "Toyota",
      logo: <SiToyota />,
    },
    {
      brand_name: "Nissan",
      logo: <SiNissan />,
    },
    {
      brand_name: "Honda",
      logo: <SiHonda />,
    },
    {
      brand_name: "Mazda",
      logo: <SiMazda />,
    },
    {
      brand_name: "Nissan",
      logo: <SiNissan />,
    },
    {
      brand_name: "Honda",
      logo: <SiHonda />,
    },
    {
      brand_name: "Mazda",
      logo: <SiMazda />,
    },
  ];

  const handleBrandClick = (brand_name: string) => {
    console.log(brand_name);
    const FilteredBrands = vihicles.filter((vihicle) => {
      return vihicle.brand === brand_name;
    });

    setVihicles(FilteredBrands);
  };

  return (
    <section className=" relative  my-24 max-w-6xl lg:mx-auto mx-4 flex items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-4   ">
        <p className="text-center font-bold text-primary">Choose Your Ride</p>
        <h2 className="text-3xl text-gray-950 font-bold g:text-5xl">
          Explore Our Rides
        </h2>

        <img />

        {/* brands section */}

        <div className="  py-3   flex gap-4 lg:w-[100%] overflow-x-auto w-96  items-center justify-center   px-4 scrollbar-thin  scrollbar-thumb-primary scrollbar-thumb-rounded-lg scrollbar-track-red-50 ">
          {brands?.map((brand: BrandProps, index) => {
            return (
              <button
                key={index}
                onClick={() => handleBrandClick(brand.brand_name)}
                className=" flex flex-row items-center justify-center bg-white py-3 shadow-xl px-6 rounded-md border gap-2 cursor-pointer"
              >
                <span className="text-xl">{brand.logo}</span>
                <p className="font-bold ">{brand.brand_name}</p>
              </button>
            );
          })}
        </div>

        {/* list of all available cars */}

        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16   max-w-6xl overflow-hidden ">
          {filteredVihicles?.map((vihicle, index) => {
            return (
              <SingleRide
                imageSrc={vihicle.imageSrc}
                brand={vihicle.brand}
                vihicle_name={vihicle.vihicle_name}
                transmission_type={vihicle.transmission_type}
                badge={vihicle.badge}
                hire_price={vihicle.hire_price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portifolio;
