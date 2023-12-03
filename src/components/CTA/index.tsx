import { jeep } from "../../assets/images";
import SubscribeForm from "../SubscribeForm";

const CTA = () => {
  return (
    <section className="w-full h-[20rem] bg-primary overflow-x-clip">
      <div className=" relative flex flex-row w-full h-full max-w-6xl mx-auto  ">
        <div className="flex md:items-start items-center w-full md:w-auto">
          <div className="mx-4 flex flex-col w-full h-full items-center justify-center gap-8 ">
            <p className="text-white text-center">NewsLetter</p>
            <h3 className="text-white font-bold text-3xl max-w-mdtext-center leading-tight">
              {" "}
              Subscribe To Our NewsLetter For Updates
            </h3>

         <SubscribeForm/>
          </div>
        </div>
        <img
          className="hidden absolute md:block -right-32 -top-32"
          src={jeep}
          alt="jeep"
        ></img>
      </div>
    </section>
  );
};

export default CTA;
