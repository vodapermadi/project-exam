import React from "react";
import { Link } from "react-router-dom";
import Animated from "../animated/Animated";
import Animated2 from "../animated/Animated2";

const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-center items-center py-5">
        <div className="container py-3 px-4">
          <div className="row justify-content-center mb-4">
            <div className="col-md-8 m-1 text-center text-white bgTask py-4 px-3">
              <p>
                <h1 className="pb-3">Welcome to Collections Mini Project</h1>
                <h4>
                  it started with me not <br /> having a job and ended with the
                  emergence <br /> of this website
                </h4>
                <Link
                  to={`/mini-project/todolist`}
                  className="btn btn-outline-primary px-4 py-2 mt-4"
                  style={{ borderRadius: "15px" }}
                >
                  <h4 className="text-white">Get Started</h4>
                </Link>
              </p>
            </div>
            <div className="col-md-3 containerAnimation shadow m-1">
              <p>
                <Animated />
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 bgTask containerAnimation m-1 p-4">
              <Animated2/>
            </div>
            <div className="col-md-6 m-1 bgTask text-center py-4 px-3">
              <p>
                <h1 className="pb-4">Introduce My Self</h1>
                <h4>
                  I am philipus voda permadi, <br /> 16 years old and currently
                  in the
                  <br /> 2nd grade of SMK. My hobby is listening <br /> to music,and{" "}
                  my favorite <br /> music is the album from <br /> justine bieber{" "}
                </h4>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
