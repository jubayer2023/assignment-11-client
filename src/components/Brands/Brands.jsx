import { useEffect, useState } from "react";
import BrandsCard from "./BrandsCard";

const Brands = () => {
  const [brandImage, setBrandImage] = useState([]);

  useEffect(() => {
    fetch("https://brandshop-server-side-project-jb0f6tjfs.vercel.app/brandImage")
      .then((res) => res.json())
      .then((data) => setBrandImage(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {brandImage.map((brand) => (
        <BrandsCard brand={brand} key={brand._id}></BrandsCard>
      ))}
    </div>
  );
};

export default Brands;
