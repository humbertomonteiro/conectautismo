import "./App.css";

import Aos from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";

import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import RouterApp from "./routes/routes";

function App() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <main className="main">
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </main>
  );
}

export default App;
