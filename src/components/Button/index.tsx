interface ButtonProps {
  theme: "outlined" | "filled";
  text: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { theme, text } = props;

  const button =
    theme === "filled" ? (
      <button
        className=" bg-red-500 px-6 py-2.5 rounded-md border-2 border-solid
       text-white border-transparent transition-all duration-300 w-full
         ease-in-out hover:bg-transparent hover:border-red-500 hover:text-red-500"
      >
        {text}
      </button>
    ) : (
      <button
        className=" bg-transparent px-6 py-2.5 rounded-md border-2 border-solid w-full 
  border-red-500 text-red-400 transition-all duration-
     ease-in-out hover:bg-red-500  hover:text-white"
      >
        {text}
      </button>
    );

  return button;
};

export default Button;
