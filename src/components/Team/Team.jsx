import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../../../src/assets/team_img/img-1.jpg";
import img2 from "../../../src/assets/team_img/img-2.jpg";
import img3 from "../../../src/assets/team_img/img-3.jpg";

const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="100"
        data-aos-duration="1400"
        className="bg-slate-500 p-4 drop-shadow-lg rounded-md cursor-pointer"
      >
        <figure className="flex items-center justify-center">
          <img
            src={img1}
            className="w-[120px] rounded-full h-[120px] "
            alt=""
          />
        </figure>
        <div className="text-center pt-4 text-neutral-700 text-2xl font-bold font-cute uppercase">
          <h3>Mr. Jobaiden</h3>
          <p>CEO</p>
        </div>
      </div>

      <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="100"
        data-aos-duration="2000"
        className="bg-slate-500 p-4 drop-shadow-lg rounded-md cursor-pointer"
      >
        <figure className="flex items-center justify-center">
          <img
            src={img2}
            className="w-[120px] rounded-full h-[120px] "
            alt=""
          />
        </figure>
        <div className="text-center pt-4 text-neutral-700 text-2xl font-bold font-cute uppercase">
          <h3>Mr. Hathur Sing</h3>
          <p>SEO</p>
        </div>
      </div>

      <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="100"
        data-aos-duration="1600"
        className="bg-slate-500 p-4 drop-shadow-lg rounded-md cursor-pointer"
      >
        <figure className="flex items-center justify-center">
          <img
            src={img3}
            className="w-[120px] rounded-full h-[120px] "
            alt=""
          />
        </figure>
        <div className="text-center pt-4 text-neutral-700 text-2xl font-bold font-cute uppercase">
          <h3>Mr. Williamson Smith</h3>
          <p>MEO</p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="100"
        data-aos-duration="2000"
        className="bg-slate-500 p-4 drop-shadow-lg rounded-md cursor-pointer"
      >
        <figure className="flex items-center justify-center">
          <img
            src={img3}
            className="w-[120px] rounded-full h-[120px] "
            alt=""
          />
        </figure>
        <div className="text-center pt-4 text-neutral-700 text-2xl font-bold font-cute uppercase">
          <h3>Mr. Siddhart</h3>
          <p>PEO</p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="100"
        data-aos-duration="3200"
        className="bg-slate-500 p-4 drop-shadow-lg rounded-md cursor-pointer"
      >
        <figure className="flex items-center justify-center">
          <img
            src={img1}
            className="w-[120px] rounded-full h-[120px] "
            alt=""
          />
        </figure>
        <div className="text-center pt-4 text-neutral-700 text-2xl font-bold font-cute uppercase">
          <h3>Mr. Kane Williams</h3>
          <p>GEO</p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="100"
        data-aos-duration="1800"
        className="bg-slate-500 p-4 drop-shadow-lg rounded-md cursor-pointer"
      >
        <figure className="flex items-center justify-center">
          <img
            src={img2}
            className="w-[120px] rounded-full h-[120px] "
            alt=""
          />
        </figure>
        <div className="text-center pt-4 text-neutral-700 text-2xl font-bold font-cute uppercase">
          <h3>Mr. James Smith</h3>
          <p>DEO</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
