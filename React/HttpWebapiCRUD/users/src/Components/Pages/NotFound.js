import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h1>Page Not Found</h1>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
};

export default NotFound;
