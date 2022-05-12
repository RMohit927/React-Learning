import React from "react";
import "../../index.css";
// import Card from "./Card";
import Button from "./Button";

const ErrorModel = (props) => {
  return (
    <div>
      <div className="backdrop" />
      <div className="card model">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button>Okay</Button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModel;
