import React from 'react'
import { Link, useRouteError } from "react-router-dom";



type routerError=any
const ErrorElement= () => {
  const error:routerError = useRouteError();

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-4">
   
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-lg font-bold" >{error.statusText || error.message}</i>
      </p>
      <Link className="px-6 py-2.5 bg-primary text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out"  to='/'><a > Back Home</a></Link>
    </div>
  );
};

export default ErrorElement;
