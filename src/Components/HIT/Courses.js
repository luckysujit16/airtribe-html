import React from "react";
import uiImg1 from "./assets/uidesign.avif";

const Courses = () => {
  return (
    <div className="container-fluid p-5">
      <h3>Courses</h3>
      <div className="row p-5">
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <div className="card">
            <img src={uiImg1} alt="" />
            <div className="card-body">
              <h3>UI Development</h3>
              <p></p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <div className="card">
            <img src={uiImg1} alt="" />
            <div className="card-body">
              <h3>UI Development</h3>
              <p></p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <div className="card">
            <img src={uiImg1} alt="" />
            <div className="card-body">
              <h3>UI Development</h3>
              <p></p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <div className="card">
            <img src={uiImg1} alt="" />
            <div className="card-body">
              <h3>UI Development</h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
