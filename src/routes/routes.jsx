import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Confirmation from "../pages/Confimation";
// import Admin from "../pages/Admin";
import Sponsor from "../pages/Sponsor";

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/confirmation" element={<Confirmation />} />
      {/* <Route path="/admin" element={<Admin />} /> */}
      <Route path="/expositor" element={<Sponsor />} />
    </Routes>
  );
}
