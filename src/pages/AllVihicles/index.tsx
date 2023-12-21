import Main from "../../components/Layouts/Main";
import CustomLink from "../../components/CustomLink";
import { FaAngleRight } from "react-icons/fa";
import vihicles, { make } from "../../services/allVihicles";
import SingleRide from "../../components/Portifolio/SingleRide";
import Button from "../../components/Button";
import carTypes from "../../services/allVihicles";

const Catalogue = () => {
  return (
    <Main>
      <section className="my-32 max-w-6xl mx-4 md:mx-auto">
        <div className="flex flex-row items-center gap-2 justify-between my-4  w-full ">
          <CustomLink to="/" text="Home" variant="unfilled" />
          <span>
            <FaAngleRight />
          </span>

          <p className="text-md w-full text-left hover:underline cursor-pointer">
            Availble
          </p>
        </div>

        <div className="grid grid-flow-cols sm:grid-cols-2 md:grid-cols-3 gap-8  mt-16 pr-4   max-w-6xl w-full overflow-hidden ">
          {/* search form */}

          <div className="border rounded-md w-full py-8 px-4  padding- h-full">
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label
                  htmlFor="vihicle_name"
                  className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Toyota premio"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="vihicle_name"
                  className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Type
                </label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary/10 accent-blacks focus:border-primary block w-full p-2.5 ">
                  <option selected>Choose type of Car</option>
                  {make?.map((car_make, index) => {
                    return (
                      <option key={index} value={car_make}>
                        {car_make}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="transmission_type"
                  className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Transmission
                </label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary/10 accent-blacks focus:border-primary block w-full p-2.5 ">
                  <option selected>Transmission Type</option>
                  <option value="manual">Manual</option>
                  <option value="manual">Automatic</option>
                </select>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="price"
                  className="block text-start mb-2 text-sm font-medium text-gray-900 "
                >
                  Price
                </label>

                <div className="flex flex-row gap-6 justify-between">
                  <input
                    type="number"
                    name="min_price"
                    min={2000}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary  block w-full p-2.5"
                    placeholder="min_price"
                    required
                  ></input>
                     <input
                    type="number"
                    name="max_price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary  block w-full p-2.5"
                    placeholder="max_price"
                    required
                  ></input>
                </div>
                <div></div>
              </div>

              <Button theme="filled" text="Search"></Button>
            </form>
          </div>

          {vihicles?.map((vihicle) => {
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
        </div>
      </section>
    </Main>
  );
};

export default Catalogue;
