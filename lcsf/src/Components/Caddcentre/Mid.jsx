import React from "react";
import "./Home.css";

export const Mid = () => {
  return (
    <div>
      <div className="container my-5">
        <h2 className="text-center text-danger mb-4">
          World class training, world over.
        </h2>
        <div className="row text-center">
          <div className="col-md-3">
            <h3 className="text-danger">2M+</h3>
            <p>Engineers and Professionals trained</p>
          </div>
          <div className="col-md-3">
            <h3 className="text-danger">730</h3>
            <p>Training centres - Asia's biggest network</p>
          </div>
          <div className="col-md-3">
            <h3 className="text-danger">24</h3>
            <p>Global locations</p>
          </div>
          <div className="col-md-3">
            <h3 className="text-danger">100+</h3>
            <p>Industry-ready courses</p>
          </div>
        </div>

        <h3 className="text-center text-danger mt-5">CADD Divisions</h3>
        <div className="row text-center mt-4">
          <div className="col-md-4">
            <div className="card bg-light p-4">
              <i className="fas fa-globe-asia fa-3x text-danger mb-3"></i>
              <h4 className="text-danger">CADD Centre Overseas</h4>
              <p>CAD training services in Asia, Africa, and the Middle East</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-danger text-white p-4">
              <i className="fas fa-chalkboard-teacher fa-3x mb-3"></i>
              <h4>Customised Training</h4>
              <p>Tailor-made training solutions across disciplines</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-light p-4">
              <i className="fas fa-briefcase fa-3x text-danger mb-3"></i>
              <h4 className="text-danger">Placement Services</h4>
              <p>
                We take ownership in assessing students and matching them with
                the right jobs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
