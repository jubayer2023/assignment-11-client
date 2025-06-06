import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogIn = () => {
    signInWithGoogle()
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
      });
  };

  return (
    <div
      className="flex justify-center w-full
       mx-auto"
    >
      <button
        onClick={handleGoogleLogIn}
        className="text-gray-800 font-semibold capitalize w-full mb-2 btn btn-outline"
      >
        <span className="text-2xl font-semibold">
          <FcGoogle></FcGoogle>
        </span>{" "}
        Google
      </button>
    </div>
  );
};

export default GoogleLogIn;
