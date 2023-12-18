import {  useRouteError } from "react-router-dom";
import CustomLink from "../CustomLink";

type routerError = any;
const ErrorElement = () => {
  const error: routerError = useRouteError();

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-4">
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-lg font-bold">{error.statusText || error.message}</i>
      </p>

     <div className="max-w-sm"> <CustomLink to="/" variant='filled' text="Back Home"></CustomLink></div> 
    </div>
  );
};

export default ErrorElement;
