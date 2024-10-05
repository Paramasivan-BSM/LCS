import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { P1 } from "./Home/P1";

export const Temp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<P1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
