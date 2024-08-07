import "./css/style.css";
import "./css/sm&md.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <section className="register-page">
        <header>
          <div>
            <h1>Lora *</h1>
          </div>
        </header>
        <div className="container">
          <form>
            <h1>Register</h1>
            <div>
              <input type="text" name="username" placeholder="First Name" />
              <input type="text" name="username" placeholder="Last Name" />
            </div>
            <div>
              <input type="email" name="email" placeholder="Email" className="success"/>
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" />
              <input
                type="password"
                name="r_password"
                placeholder="Confirm Password"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="fail"
              />
            </div>
            <button>Submit</button>
            <div>
              <span>
                <Link>{`Love You - *. ♥ .*`} </Link>
              </span>
              <span>
                <Link to={"/"}>Help</Link>
              </span>
            </div>
          </form>
        </div>
        <footer>
          <span>Do you have account !</span>
          <Link to={"/auth/login"}>Login</Link>
        </footer>
      </section>
    </>
  );
};

export default Register;
