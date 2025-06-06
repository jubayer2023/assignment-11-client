import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;

    console.log(name, email, password, image);

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
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        swal({
          title: "Good job!",
          text: "You have successfully created user!",
          icon: "success",
          button: "Cool!",
        });
        updateUserProfile(name, image)
          .then(() => {
            console.log("updated");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error.message);
        swal("Oops Sorry", "You have already created this account!", "error");
      });
  };

  return (
    <div className="bg-neutral-100 pt-5 pb-12">
      <div className="max-w-sm mx-auto">
        <div className="text-center ">
          <h1 className="text-3xl md:text-5xl font-bold my-5">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
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
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>
              Already have an account!!{" "}
              <Link to={"/login"}>
                <span className="text-green-500 text-lg cursor-pointer underline font-cute font-semibold">
                  Login here..
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
