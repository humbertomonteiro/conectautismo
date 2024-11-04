import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Confirmation from "../pages/Confimation";

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
