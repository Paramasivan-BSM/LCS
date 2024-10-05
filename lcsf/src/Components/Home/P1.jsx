import React from "react";
import { Navbar } from "./Navbar";
import { Carousel } from "./Carousel";
import { Description } from "./Description";
import { Footer } from "./Footer";
import { Mid } from "./Mid";

export const P1 = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Description />
      <Mid />
      <Footer />
    </div>
  );
};
