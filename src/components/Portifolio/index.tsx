
import { SiToyota } from "react-icons/si";
import { SiHonda } from "react-icons/si";
import { SiMazda } from "react-icons/si";
import { SiNissan } from "react-icons/si";
import SingleRide from "./SingleRide";
export interface BrandProps {
  brand_name?: string;
  logo?: any;
}

const Portifolio: React.FC<BrandProps> = () => {
  const brands: BrandProps[] = [
    {
      brand_name: "Toyota",
      logo: <SiToyota />,
    },
    {
      brand_name: "Nissa",
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
      brand_name: "Nissa",
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

  return (
    <section className=" relative  my-24 max-w-6xl lg:mx-auto mx-4 flex items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-4   ">
        <p className="text-center font-bold text-primary">Choose Your Ride</p>
        <h2 className="text-3xl text-gray-950 font-bold g:text-5xl">
          Explore Our Rides
        </h2>

        {/* brands section */}

        <div className="  py-12  flex gap-4 lg:w-[100%] overflow-x-auto w-72  m  px-4 scrollbar-thin  scrollbar-thumb-primary scrollbar-thumb-rounded-lg scrollbar-track-red-50 ">
          {brands?.map((brand: BrandProps) => {
            return (
              <div className=" flex flex-row items-center justify-center bg-white py-3 shadow-xl px-6 rounded-md border gap-2">
                <span className="text-xl">{brand.logo}</span>
                <p className="font-bold ">{brand.brand_name}</p>
              </div>
            );
          })}
        </div>

        {/* list of all available cars */}

        <div>

          <SingleRide/>
      
        </div>
      </div>
    </section>
  );
};

export default Portifolio;
