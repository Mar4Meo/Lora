import "./assets/css/App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/HomePage/Index";
import Register from "./pages/AuthPages/Register/Index";
import Login from "./pages/AuthPages/Login/Index";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
