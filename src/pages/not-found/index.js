import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div>
      {error.status} Error : {error.statusText}
    </div>
  );
};

export default NotFound;
