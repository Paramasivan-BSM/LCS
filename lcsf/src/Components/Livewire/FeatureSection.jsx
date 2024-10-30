import React from "react";

const FeatureSection = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-md-6">
          <h3 className="fw-bold">
            <span
              style={{ borderLeft: "4px solid #FFD700", paddingLeft: "10px" }}
            >
              Develop In-Demand Skills
            </span>
          </h3>
          <p className="text-muted mt-3">
            Livewire's on-demand courses in emerging technologies give you the
            knowledge you need to stay ahead of the curve and succeed in today's
            fast-paced world.
          </p>
          <ul className="list-unstyled mt-4">
            <li className="mb-2">
              <strong>Comprehensive Learning Experience</strong>
            </li>
            <li className="mb-2">
              <strong>Assured Job Placement</strong>
            </li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="col-md-6 position-relative text-center">
          <img
            src="https://livewireindia.com/assets/images/homepage/tier/01.webp"
            className="img-fluid"
            alt="Main Feature"
            style={{ borderRadius: "8px" }}
          />
          <img
            src="https://livewireindia.com/assets/images/homepage/tier/01.webp"
            alt="Overlay Feature 1"
            className="position-absolute rounded-circle"
            style={{
              top: "10%",
              right: "10%",
              width: "80px",
              border: "3px solid #fff",
            }}
          />
          <img
            src="https://livewireindia.com/assets/images/homepage/tier/01.webpm"
            alt="Overlay Feature 2"
            className="position-absolute rounded-circle"
            style={{
              bottom: "10%",
              left: "10%",
              width: "80px",
              border: "3px solid #fff",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
