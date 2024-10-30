import React from "react";

const HearFromStudents = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: "#e7f1ff" }}>
      <div className="row align-items-center">
        {/* Left Section - Text */}
        <div className="col-md-6">
          <h2 className="text-primary font-weight-bold">
            Hear from Our Students
          </h2>
          <p className="text-muted mt-3">
            Livewire students talk about their enjoyable learning experiences
            that included practical training, best practices, job prospects, and
            exposure to reputable businesses and organizations.
          </p>
          <a
            href="#more-testimonials"
            className="text-primary font-weight-bold d-inline-flex align-items-center mt-3"
          >
            See More Testimonials <span className="ml-2">&#x25BA;</span>
          </a>
        </div>

        {/* Right Section - Student Video */}
        <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0">
          <div
            className="position-relative"
            style={{ width: "100%", maxWidth: "500px" }}
          >
            {/* Embedded YouTube video */}
            <iframe
              width="100%"
              height="280"
              src="https://www.youtube.com/embed/xKdnkWPhfH8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "8px" }}
            ></iframe>

            {/* Overlay text for student name and course */}
            <div
              className="position-absolute bottom-0 start-0 bg-primary text-white p-2 rounded"
              style={{ transform: "translateY(50%)", width: "80%" }}
            >
              <p
                className="mb-0 font-weight-bold"
                style={{ fontSize: "0.9rem" }}
              >
                Madiha Khan
              </p>
              <p className="mb-0" style={{ fontSize: "0.8rem" }}>
                Java & Full Stack Course
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HearFromStudents;
