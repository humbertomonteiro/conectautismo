import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { capturarTracking } from "./Utils/tracking.js";

capturarTracking();

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
