import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="py-4 align-self-center">
        <h2>Contact Us</h2>
        <div className="underline mb-4" />
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputText1" className="form-label">
              Message
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputText1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputContactNo1" className="form-label">
              Contact No
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputContactNo1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
