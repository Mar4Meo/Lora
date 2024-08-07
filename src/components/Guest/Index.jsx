import { Link } from "react-router-dom";
import "./css/style.css";
import AnimateLoader from "../AnimataLoader/Index";
import { useEffect, useState } from "react";

const Guest = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <>
      {loader && <AnimateLoader />}
      <section className="auth-page">
        <header>
          <div>
            <h1>Lora *</h1>
          </div>
        </header>
        <section>
          <p>
            Welcome To Lora <span>Wa</span>
          </p>
          <div>
            <Link to={"/"}>Login</Link>
            <span>_</span>
            <Link to={"/auth/register"}>Register</Link>
          </div>
          <p>To Get Your Contacts & Friends</p>
        </section>
        <footer>
          <span>{`I don't have account?`}</span> <Link to={"/auth/register"}>Register</Link>
        </footer>
      </section>
    </>
  );
};

export default Guest;
