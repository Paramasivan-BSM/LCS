import React from "react";
import { LNavbar } from "./Lnavbar";
import LCarouselComponent from "./LCarouselComponent";
import FeatureSection from "./FeatureSection";
import LTrendingCourses from "./LTrendingCourses";
import Footer from "./Lfooter";
import HearFromStudents from "./LHearFromStudents ";

export const LO = () => {
  return (
    <div>
      <LNavbar />
      <LCarouselComponent />
      <FeatureSection />
      <LTrendingCourses />
      <HearFromStudents />
      <Footer />
    </div>
  );
};
