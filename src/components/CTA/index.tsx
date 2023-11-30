import { jeep } from "../../assets/images";
import Button from "../Button";



const CTA = () => {
  return (
    <section className="w-full h-[20rem] bg-primary overflow-x-clip">
        <div className=" relative flex flex-row w-full h-full max-w-6xl mx-auto  "> 
     <div className="flex md:items-start items-center w-full md:w-auto">
     <div className="mx-4 flex flex-col w-full h-full items-center justify-center gap-8 ">
        <p className="text-white text-center">NewsLetter</p>
        <h3 className="text-white font-bold text-3xl max-w-sm text-center leading-tight">
          {" "}
          Subscribe To Our NewsLetter For Updates
        </h3>

        <div className="">
            <div className="relative h-16 w-96 ">
            <input className=" px-2 w-full h-full rounded-md border" placeholder="Your email address..."></input>
            <div className="absolute top-3 right-2"> <Button  theme="filled" text="Subscribe Now"></Button></div>
            </div>
       


        </div>
      </div>
     </div>
      <img className="hidden absolute md:block -right-32 -top-32" src={jeep} alt='jeep'></img>
        </div>

    </section>
  );
};

export default CTA;
