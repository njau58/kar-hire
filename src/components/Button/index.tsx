interface ButtonProps {
  theme: "outlined" | "filled" | "text";
  text: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { theme, text } = props;

  switch (theme) {
    case "filled":
      return (
        <button
          className=" bg-red-500 px-6 py-2 rounded-md border-2 border-solid
   text-white border-transparent transition-all duration-300 w-full
     ease-in-out hover:bg-transparent hover:border-red-500 hover:text-red-500"
        >
          {text}
        </button>
      );
    case "outlined":
      return (
        <button
          className=" bg-transparent px-6 py-2 rounded-md border-2 border-solid w-full 
border-red-500 text-red-400 transition-all duration-300
ease-in-out hover:bg-red-500  hover:text-white"
        >
          {text}
        </button>
      );

    case "text":
      return (
        <button
          className="  px-3 py-2  font-bold border-solid w-full 
 transition-all duration-300 hover:text-gray-800
ease-in-out "
        >
          {text}
        </button>
      );
  }
};

export default Button;
