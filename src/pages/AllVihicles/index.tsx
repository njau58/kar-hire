
import Main from "../../components/Layouts/Main";
import CustomLink from "../../components/CustomLink";
import { FaAngleRight } from "react-icons/fa";
import vihicles from '../../services/allVihicles'
import SingleRide from "../../components/Portifolio/SingleRide";

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

          <div className="border rounded-md w-full py-32 h-full">

          search form goes here

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
