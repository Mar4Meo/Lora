import "./css/style.css";
import "./css/sm&md.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="login-page">
        <header>
          <div>
            <h1>Lora *</h1>
          </div>
        </header>
        <div className="container">
          <form>
            <h1>Login</h1>
            <input type="email" name="email" placeholder="Phone Number" />
            <input type="password" name="password" placeholder="Password" />
            <button>Login</button>
            <div>
              <span>
                <Link to={"/"}>Forget Password? </Link>
              </span>
              <span>
                <Link to={"/"}>Help</Link>
              </span>
            </div>
          </form>
        </div>
        <footer>
          <span>{`I don't have account?`}</span>
          <Link to={"/auth/register"}>Register</Link>
        </footer>
      </section>
    </>
  );
};

export default Login;
