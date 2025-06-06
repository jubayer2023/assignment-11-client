import "./Overlay.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CarouselItem = ({ carouselItem }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { brand_name, image } = carouselItem;
  return (
    <div className="carousel-item w-full relative">
      <img src={image} className="w-full h-[93vh]" />
      <div className="absolute overlay_img flex items-center justify-center">
        <div className="text-white max-w-screen-sm md:max-w-screen-md mx-auto space-y-4">
          <h3
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-4xl md:text-7xl font-bold text-neutral-200 font-cute leading-5 text-center "
          >
            Rev Up Your Ride with Expert Automotive Services
          </h3>
          <p
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-center font-bold text-2xl font-cute max-w-sm md:max-w-[500px] mx-auto mt-2"
          >
            {brand_name}
          </p>
          <div
            data-aos="flip-left"
            data-aos-offset="0"
            data-aos-delay="100"
            data-aos-duration="800"
            className="flex justify-center"
          >
            <button className="btn btn-outline text-sm text-center text-white bg-slate-700 capitalize font-semibold">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
