import { useEffect, useState } from "react";
import { useParams } from "react-router";
import vihicles, { CarProps } from "../../services/allVihicles";

import CarCarousel from "./CarCarousel";
import CustomLink from "../../components/CustomLink";
import { FaAngleRight } from "react-icons/fa6";
import { CiLocationOn, CiShoppingTag } from "react-icons/ci";
import BookingForm from "../../components/BookingForm";
import Main from "../../components/Layouts/Main";
import { useLocation, useNavigate } from "react-router-dom";
import SingleRide from "../../components/Portifolio/SingleRide";

const CarDetails = () => {
  const router = useParams();
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const [allVihicles, _] = useState<CarProps[]>(vihicles);

  const [vihicleDetails, setVihicleDetails] = useState<CarProps[]>([]);
  const [similarVihicles, setSimilarVaihicles] = useState<CarProps[]>([]);

  console.log(similarVihicles);

  //checks if Id passed in params is valid, thus vihicleDetails.length>1
  useEffect(() => {
    const selectedVihicle = allVihicles.filter(
      (vihicle) => vihicle.Id === router.Id
    );
    if (selectedVihicle.length < 1) {
      navigate("/");
    }

    setVihicleDetails(selectedVihicle);
  }, [navigate]);

  //sets an array of similar vihicles
  useEffect(() => {
    const selectedSimilarVihicle = allVihicles.filter(
      (vihicle) => vihicle.type === allVihicles[0]?.type
    );

    setSimilarVaihicles(selectedSimilarVihicle);
  }, []);

  console.log(similarVihicles);

  //ensures content centered in the initial mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Main>
        <div className="w-full   flex flex-col  gap-6 mt-24 py-1 md:py-3 mx-4 max-w-6xl md:mx-auto">
          <div className="flex flex-row items-center gap-2 justify-between my-4  w-full ">
            <CustomLink to="/" text="Home" variant="unfilled" />
            <span>
              <FaAngleRight />
            </span>

            <p className="text-md w-full text-left">
              {vihicleDetails[0]?.vihicle_name}
            </p>
          </div>
        </div>
        <hr className="mb-8"></hr>

        <section className="flex flex-col items-center md:mx-auto max-w-6xl   overflow-hidden justify-center md:flex-row">
          <div className="flex flex-col  justify-center mx-4">
            <h1 className=" font-semibold text-xl text-left">
              {vihicleDetails[0]?.vihicle_name}
            </h1>
            <div className="flex items-center justify-center  flex-col lg:flex-row  max-w-5xl mx-auto md:w-full mb-4  ">
              <div className="md:w-[80%]">
                {" "}
                <CarCarousel images={vihicleDetails[0]?.imageSrc} />
              </div>
              <div className="md:w-[50%] w-full h-full ">
                {" "}
                <BookingForm hire_price={vihicleDetails[0]?.hire_price} />
              </div>
            </div>
            <hr></hr>
            <div className="flex flex-col md:flex-row  md:gap-32 gap-12  justify-between items-center mt-4 ">
              <div className="flex flex-col items-start gap-16  ">
                <div>
                  {" "}
                  <h1 className="font-semibold text-start mb-4">Features</h1>
                  <div className="grid grid-flow-col gap-8 place-content-center items-center grid-rows-2">
                    {vihicleDetails[0]?.features?.map((feature, idx) => {
                      return (
                        <div className="flex flex-row gap-1  items-center justify-center">
                          {" "}
                          <CiShoppingTag /> <p key={idx}>{feature}</p>{" "}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="font-semibold">Location</h1>
                  <div className="flex flex-row gap-1  items-center justify-center">
                    {" "}
                    <CiLocationOn /> <p>{allVihicles[0]?.location}</p>{" "}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-4 max-w-xl mx-4 md:mx-auto ">
                  <h1 className="font-semibold text-left">
                    About {`${vihicleDetails[0]?.vihicle_name}`}
                  </h1>
                  <p className="text-left">{allVihicles[0]?.description}</p>
                </div>
              </div>
            </div>

            <hr className="w-full md:mr-0 mr-4 mt-8"></hr>
          </div>
        </section>

        <div className="mt-24">
          <div className="flex flex-col items-center justify-center gap-2   ">
            <h2 className="text-center text-2xl  font-bold text-primary">
              Similar Vihicles
            </h2>
            <p className=" text-gray-950 ">
              People who viewed {vihicleDetails[0]?.vihicle_name} also consider
            </p>
            <div className="grid grid-flow-cols sm:grid-cols-2 md:grid-cols-3 gap-8  mt-16 pr-4   max-w-6xl w-full overflow-hidden ">
            {similarVihicles?.map((vihicle) => {
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
          </div>
        </div>
      </Main>
    </>
  );
};

export default CarDetails;
