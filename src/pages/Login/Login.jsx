import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";
import GoogleLogIn from "./GoogleLogIn";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    if (password.length < 6) {
      swal({
        title: "Sorry!",
        text: "Password is too short. It should be at least 6 characters long",
        icon: "error",
        button: "ok!",
      });

      return;
    } else if (!/[A-Z]/.test(password)) {
      swal({
        title: "Sorry!",
        text: "Password does not contain a capital letter.",
        icon: "error",
        button: "ok!",
      });

      return;
    } else if (!/\W/.test(password)) {
      swal({
        title: "Sorry!",
        text: "Password does not contain a special character",
        icon: "error",
        button: "ok!",
      });

      return;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      swal({
        title: "Sorry!",
        text: "Email is not valid.",
        icon: "error",
        button: "ok!",
      });

      return;
    }

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        swal({
          title: "Good job!",
          text: "User have successfully logged in!",
          icon: "success",
          button: "Cool!",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        swal("Oops Sorry!!", "Email is not valid!", "error");
      });
  };

  return (
    <div className=" bg-neutral-100 pt-5 pb-12">
      <div className="max-w-sm mx-auto">
        <div className="text-center ">
          <h1 className="text-3xl md:text-5xl font-bold my-5">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

            <p className="text-sm text-gray-800 font-semibold py-1">
              Sign In With Google
            </p>
            <GoogleLogIn></GoogleLogIn>

            <p className="text-gray-800 text-sm font-semibold">
              Do not have an account!!{" "}
              <Link to={"/register"}>
                <span className="text-red-500 text-lg cursor-pointer underline font-cute font-semibold">
                  Register here..
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
