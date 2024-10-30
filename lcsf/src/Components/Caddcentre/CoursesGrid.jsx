import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Asys from "../../assets/Asys.webp";
import AutocadME from "../../assets/AutocadME.webp";

const CoursesGrid = () => {
  const courses = [
    {
      title: "AutoCAD Mechanical",
      hours: "160",
      mode: "In-centre",
      description:
        "Project based assessment | World-class courseware | Industry recognized certificate | Placement support",
      imageUrl:
        "https://marketing.caddcentre.com/uploads/banners/1686910751_AutoCAD-For-Mechanical-Engineers.webp", // Replace with actual image path
    },
    {
      title: "ANSYS",
      hours: "240",
      mode: "In-centre",
      description:
        "Project based assessment | Industry recognized certificate | Placement support",
      imageUrl: "image2.jpg",
    },
    {
      title: "CREO",
      hours: "240",
      mode: "In-centre",
      description:
        "Project based assessment | World-class courseware | Industry recognized certificate | Placement support",
      imageUrl: "image3.jpg",
    },
    {
      title: "NX CAD",
      hours: "160",
      mode: "In-centre",
      description:
        "Project based assessment | World-class courseware | Industry recognized certificate | Placement support",
      imageUrl: "image4.jpg",
    },
    {
      title: "Revit MEP",
      hours: "160",
      mode: "In-centre",
      description:
        "Project based assessment | World-class courseware | Industry recognized certificate | Placement support",
      imageUrl: "image4.jpg",
    },
    {
      title: "SolidWorks",
      hours: "160",
      mode: "In-centre",
      description:
        "Project based assessment | World-class courseware | Industry recognized certificate | Placement support",
      imageUrl: "image4.jpg",
    },
  ];

  const CourseCard = ({ title, hours, mode, description, imageUrl }) => (
    <div className="col-md-3 mb-4">
      <div className="card shadow-sm">
        <div className="position-relative">
          <img src={imageUrl} className="card-img-top" alt={title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="d-flex align-items-center mb-2">
            <span className="badge bg-danger me-2">{hours} hrs</span>
            <span className="badge bg-danger">{mode}</span>
          </div>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-outline-danger">
            Know More
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Top Certification Courses</h2>
        <div className="row">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              hours={course.hours}
              mode={course.mode}
              description={course.description}
              imageUrl={course.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesGrid;
