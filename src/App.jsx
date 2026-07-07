import "./App.css";

import Aos from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { doc, setDoc, increment } from "firebase/firestore";

import RouterApp from "./routes/routes";

import { LinkProvider } from "./contexts/LinkContexts";
import { AuthProvider } from "./contexts/AuthContext";
import { db } from "./firebaseConfig";

function App() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  useEffect(() => {
    function handleHotmartClick(e) {
      const link = e.target.closest('a[href*="hotmart"]');
      if (!link) return;
      const slug = sessionStorage.getItem("influencer-ref");
      if (!slug) return;
      setDoc(doc(db, "influencer-stats", slug), { hotmartClicks: increment(1) }, { merge: true });
    }
    document.addEventListener("click", handleHotmartClick);
    return () => document.removeEventListener("click", handleHotmartClick);
  }, []);

  return (
    <main className="main">
      <AuthProvider>
        <BrowserRouter>
          <LinkProvider>
            <RouterApp />
          </LinkProvider>
        </BrowserRouter>
      </AuthProvider>
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
