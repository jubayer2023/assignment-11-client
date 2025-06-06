import logo from "../../../src/assets/logo/logo.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto px-4 lg:px-0">
      <div className="flex flex-col md:flex-row justify-around pt-10">
        <div>
          <img className="w-[150px] rounded-md mb-2" src={logo} alt="" />
          <p className="text-lg font-semibold  text-neutral-200 ">
            Automotive Industries Ltd.
            <br />
            Providing reliable event since 2023
          </p>
        </div>
        <div>
          <header className="text-neutral-200 text-3xl font-semibold">
            Social
          </header>
          <div className="flex items-center justify-center gap-4 text-3xl mt-5 bg-neutral-50 rounded-md shadow-lg p-5">
            <FaFacebookSquare></FaFacebookSquare>
            <AiFillInstagram></AiFillInstagram>
            <BsWhatsapp></BsWhatsapp>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-neutral-200 mt-8 pb-5 text-sm font-semibold">
          <p>
            Copyright <span className="text-red-500">&copy;</span> 2023 - All
            right reserved by Md. Jubayer Sarker
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
