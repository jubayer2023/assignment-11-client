import { useEffect } from "react";
import { useState } from "react";
import CarouselItem from "./CarouselItem";

const Banner = () => {
  const [carouselItem, setCarouselItem] = useState([]);

  useEffect(() => {
    fetch("https://brandshop-server-side-project-jb0f6tjfs.vercel.app/banner")
      .then((res) => res.json())
      .then((data) => setCarouselItem(data));
  }, []);

  return (
    <div className="carousel w-full space-x-4 ">
      {carouselItem.map((item) => (
        <CarouselItem carouselItem={item} key={item._id}></CarouselItem>
      ))}
    </div>
  );
};

export default Banner;
