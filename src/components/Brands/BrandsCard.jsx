import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BrandsCard = ({ brand }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { brand_name, image } = brand;

  return (
    <Link to={`brands/${brand_name}`}>
      <div className="bg-slate-500 p-4 drop-shadow-lg rounded-md cursor-pointer">
        <figure>
          <img
            data-aos="flip-left"
            data-aos-offset="0"
            data-aos-delay="100"
            data-aos-duration="1200"
            src={image}
            className="w-full rounded-md h-[180px] "
            alt=""
          />
        </figure>
        <div className="text-center pt-4 text-neutral-700 text-2xl font-bold font-cute uppercase">
          <h3>{brand_name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default BrandsCard;
