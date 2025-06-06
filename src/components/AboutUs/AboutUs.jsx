import Accordian from "./Accordian";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto py-16 mt-8">
      <h3 className="text-2xl md:text-4xl text-center font-bold mb-8">
        About Us
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:px-0">
        <div
          data-aos="fade-down"
          data-aos-offset="0"
          data-aos-delay="100"
          data-aos-duration="1200"
          className="shadow-xl rounded-md p-5 bg-neutral-200 text-neutral-800"
        >
          <h3 className="text-3xl font-bold">About Our Automotive</h3>
          <p className="text-sm font-semibold">
            At <span className="text-red-800">Automotive</span> we believe
            that every event is a unique opportunity to create unforgettable
            memories. With a passion for perfection and an unwavering commitment
            to excellence, we take pride in being your trusted partner in
            turning your dreams into reality.
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="0"
          data-aos-delay="100"
          data-aos-duration="2000"
          className="shadow-xl rounded-md p-5 bg-neutral-200 text-neutral-800"
        >
          <h3 className="text-3xl font-bold">Our Story</h3>
          <p className="text-sm font-semibold">
            Founded in 2020, <span className="text-red-800">Automotive</span>{" "}
            has been a trailblazer in the event management industry. What
            started as a small team of dedicated event enthusiasts has grown
            into a full-fledged event management company, serving clients
            locally and beyond.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="500"
          data-aos-duration="3000"
          className="shadow-xl rounded-md p-5 bg-neutral-200 text-neutral-800"
        >
          <h3 className="text-3xl font-bold">Our Mission</h3>
          <p className="text-sm font-semibold">
            Our mission is to design, plan, and execute events that leave a
            lasting impression. We are driven by the desire to exceed your
            expectations by delivering innovative, meticulously planned, and
            flawlessly executed events. We believe that every detail matters and
            that seamless coordination is the key to success.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="100"
          data-aos-duration="2500"
          className="shadow-xl rounded-md p-5 bg-neutral-200 text-neutral-800"
        >
          <h3 className="text-3xl font-bold">
            Why Choose <span className="text-red-800">Automotive</span>
          </h3>
          {<Accordian></Accordian>}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
