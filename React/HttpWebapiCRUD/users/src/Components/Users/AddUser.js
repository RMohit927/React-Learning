import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

  const onInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    // console.log(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:3005/users", user);
    navigate("/");
  };
  return (
    <div className="container mt-3">
      <div className="w-75 mx-auto shadow p-5 sub-container">
        <div className="d-flex justify-content-between">
          <div>
            <h2>New User</h2>
            <div className="underline mb-4" />
          </div>
          <div>
            <Link className="btn btn-primary" to="/">
              back to Home
            </Link>
          </div>
        </div>
        <div className="main">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                name="name"
                value={name}
                onChange={(event) => onInputChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputUserName" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUserName"
                name="username"
                value={username}
                onChange={(event) => onInputChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                value={email}
                onChange={(event) => onInputChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPhone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPhone"
                name="phone"
                value={phone}
                onChange={(event) => onInputChange(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputWebsite" className="form-label">
                Business Site
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputWebsite"
                name="website"
                value={website}
                onChange={(event) => onInputChange(event)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
