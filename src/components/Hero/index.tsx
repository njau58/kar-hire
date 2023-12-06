
import Button from "../Button";
import CustomLink from "../CustomLink";

const Hero: React.FC = () => {
  return (
    <section className=" relative mt-44  w-full  ">
      <div className="max-w-6xl lg:mx-auto  flex flex-row justify-between mx-4 ">
        <div className="flex relative z-30 flex-col items-start lg:gap-8 gap-4 ">
          <div className="flex flex-row items-center justify-center gap-1">
            <hr className="w-6 bg-red-500 h-0.5"></hr>
            <p className="text-red-500">Welcome to Kar Hire</p>
          </div>
          <h1 className="text-gray-950 max-w-sm lg:max-w-xl font-bold text-3xl lg:text-5xl leading-normal text-start">
            {" "}
            Hire Your Ride  Across Kenya With Us
          </h1>
          <p className="text-gray-700 lg:max-w-xl max-w-sm text-start text-sm lg:text-base">
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout.
          </p>
          <div className="flex flex-row gap-4 w-full max-w-sm">
            <CustomLink variant="filled" text="Hire Your Ride" to='all-vihicles' />
            <Button theme="outlined" text="Become A Partner" />
          </div>
        </div>

       <div className=" absolute lg:-right-[18rem] lg:-top-[15rem]  lg:w-[65%] bg-blob2 bg-no-repeat  bg-contain lg:h-[40rem] -top-[12rem] w-full h-full -right-[12rem] "></div>
      </div>
     
    </section>
  );
};

export default Hero;
