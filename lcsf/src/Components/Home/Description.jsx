import React from "react";
import "./Home.css";
import st from "../../assets/youtubeTestimonial.png";

export const Description = () => {
  return (
    <div className="container mt-5">
      <h3 className="text-danger text-center mb-4">
        CADD Centre: 35 Years of Excellence in Professional Training
      </h3>
      <div className="row">
        <div className="col-sm-6 Desc">
          <p className="text-justify">
            For over 35 years, CADD Centre has been a leader in providing
            world-class training in computer-aided design and engineering. Our
            institute is dedicated to equipping students and professionals with
            the skills and knowledge needed to excel in industries like
            architecture, engineering, construction, and manufacturing.{" "}
          </p>
          <p className="text-justify">
            With decades of experience, we have established ourselves as a
            trusted institution, offering industry-relevant courses in CAD, CAM,
            CAE, and project management. Our expert faculty, state-of-the-art
            facilities, and tailored programs ensure that learners of all levels
            can achieve their career goals.
          </p>
          <p className="text-justify">
            {" "}
            At CADD Centre, we are committed to continuous innovation and
            providing hands-on, practical training that meets the evolving needs
            of the global market.
          </p>
        </div>
        <div className="col-sm-6">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/videoseries?si=l10gu4_d78_DNe_J&amp;list=PL9ovgj0ugeztxJiva8ZbSnYXzF0r1auvT"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
