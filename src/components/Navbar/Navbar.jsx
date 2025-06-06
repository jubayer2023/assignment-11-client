import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import profile from "../../../src/assets/user.png";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [toggole, setToggole] = useState(false);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        console.log("User Log out successfully!!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li className="hover:bg-amber-600 rounded-lg">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="hover:bg-amber-600 rounded-lg">
        <NavLink to={"/addProduct"}>Add Product</NavLink>
      </li>
      <li className="hover:bg-amber-600 rounded-lg">
        <NavLink to={"/myCart"}>My Cart</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar text-white max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto px-4 md:px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 text-white rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <img
            className="w-[50px] h-[50px] text-slate-400 rounded-full "
            src={logo}
            alt=""
          />
          <h3 className="text-3xl md:text-5xl font-cute font-bold text-pink-400 ">
            Automotive
          </h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={() => setToggole(!toggole)}>
              <label
                tabIndex={0}
                className="btn btn-ghost ml-2 btn-circle avatar"
              >
                <div className="w-10 rounded-full outline-none">
                  <img src={profile} alt="" />
                </div>
              </label>
            </button>
            {toggole && (
              <>
                <div className="bg-neutral-100 z-50 p-5 absolute top-[68px] right-2 drop-shadow-xl w-[120px] h-auto md:w-[180px] rounded-md">
                  <div className="w-[40px] h-[40px] rounded-full flex justify-center mx-auto ">
                    <img src={user.photoURL ? user.photoURL : profile} className="rounded-full" alt="" />
                  </div>
                  <p className="text-lg font-semibold text-gray-950 my-1 text-center">
                    {user.displayName}
                  </p>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm w-full btn-outline hover:bg-slate-500 bg-neutral-300 capitalize"
                  >
                    Log Out
                  </button>
                </div>
              </>
            )}
          </>
        ) : (
          <Link to={"/login"}>
            <button className="btn btn-sm bg-slate-500 text-white hover:bg-sky-600 capitalize font-semibold">
              login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
