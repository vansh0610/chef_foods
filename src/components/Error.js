import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
    const err=useRouteError();
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <h3>
        {err.status}:: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
