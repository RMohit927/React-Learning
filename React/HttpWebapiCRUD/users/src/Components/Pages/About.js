import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <div className="row py-4">
        <div className="col-md-5 col-sm-6 col-xs-12 mb-5">
          <div>
            <h2>About Us</h2>
            <div className="underline mb-4" />
            <p>
              Hi! My Name is Mohit Radadiya, A full fladge experience with
              DotNet Full Stack Developer, and Enthusiast in Data Science, IOT,
              Machine Learning Technology.
            </p>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem
            </p>
            <Link className="btn btn-primary" exact to={"/about"}>
              read more
            </Link>
          </div>
        </div>
        <div className="col-md-1 col-sm-6 col-xs-12"></div>
        <div className="col-md-5 col-sm-6 col-xs-12">
          <div className="feature">
            <div className="card m-2 p-2">
              <h4>Work with heart</h4>
              <p>
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                dapibus in.
              </p>
            </div>
            <div className="card m-2 p-2">
              <h4>Reliable services</h4>
              <p>
                Donec vitae sapien ut libero venenatis faucibu. Nullam quis
                ante. Etiam sit amet orci eget eros faucibus tincidunt
              </p>
            </div>
            <div className="card m-2 p-2">
              <h4>Great support</h4>
              <p>
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                dapibus in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
