import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

// -- Styles -- \\
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/normalize.css";
import "./assets/css/all.min.css";
import "./assets/css/index.css";

// -- Packages -- \\
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
