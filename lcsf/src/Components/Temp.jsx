import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CO } from "./Caddcentre/CO";
import { LO } from "./Livewire/LO";

export const Temp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CO />} />
        <Route path="/lw" element={<LO />} />
      </Routes>
    </BrowserRouter>
  );
};
