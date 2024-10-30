import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CourseCard = ({ image, title, description, details, link }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ borderRadius: "5px 5px 0 0" }}
        />
        <div className="card-body">
          <h6 className="text-primary">Trending Courses</h6>
          <h5 className="card-title text-dark">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="text-muted small">{details}</p>
          <a href={link} className="btn btn-primary btn-sm">
            Know More <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const LTrendingCourses = () => {
  const courses = [
    {
      image: "https://via.placeholder.com/200x100", // replace with actual image URL
      title: "Full Stack Development - MEAN / MERN stack",
      description: "In-centre | Online | Hybrid",
      details: "160 Hours | Full / Part time\nCareer support | Placements",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/200x100",
      title: "Master Certificate in Full Stack Development",
      description: "In-centre | Online | Hybrid",
      details: "160 Hours | Full / Part time\nCareer support | Placements",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/200x100",
      title: "Master Certificate in Software Development",
      description: "In-centre | Online | Hybrid",
      details: "228 Hours | Full / Part time\nCareer support | Placements",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/200x100",
      title: "Course on Python",
      description: "In-centre | Online | Hybrid",
      details: "80 Hours | Full / Part time\nCareer support | Placements",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/200x100",
      title: "Course on Python",
      description: "In-centre | Online | Hybrid",
      details: "80 Hours | Full / Part time\nCareer support | Placements",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/200x100",
      title: "Course on Python",
      description: "In-centre | Online | Hybrid",
      details: "80 Hours | Full / Part time\nCareer support | Placements",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/200x100",
      title: "Course on Python",
      description: "In-centre | Online | Hybrid",
      details: "80 Hours | Full / Part time\nCareer support | Placements",
      link: "#",
    },
  ];

  return (
    <div className="container my-5">
      <h2
        className="text-center mb-5"
        style={{ fontWeight: "bold", color: "#3a3a3a" }}
      >
        Top Trending Courses
      </h2>
      <div className="row">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            title={course.title}
            description={course.description}
            details={course.details}
            link={course.link}
          />
        ))}
      </div>
    </div>
  );
};

export default LTrendingCourses;
