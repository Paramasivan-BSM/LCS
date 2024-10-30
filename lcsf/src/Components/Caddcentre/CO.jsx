import React from "react";
import { Navbar } from "./Navbar";
import { Carousel } from "./Carousel";
import { Description } from "./Description";
import { Footer } from "./Footer";
import { Mid } from "./Mid";
import CoursesGrid from "./CoursesGrid";

export const CO = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Description />
      <Mid />
      <CoursesGrid />
      <Footer />
    </div>
  );
};
