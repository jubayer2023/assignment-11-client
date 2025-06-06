import { useLoaderData } from "react-router-dom";
import BrandsSlider from "./BrandsSlider";
import BrandsCards from "./BrandsCards";
import NotFound from "./NotFound";

const BrandsCollection = () => {
  const brandsData = useLoaderData();

  return (
    <div className="bg-slate-300 pb-12">
      {/* Slider part here */}
      <div className="flex justify-center flex-col items-center">
        <h3 className="font-cute text-4xl lg:text-7xl font-extrabold text-slate-700 py-5">
          Advertising For Sell
        </h3>

        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-slate-700 rounded-box">
          {brandsData ? (
            brandsData?.map((brand) => (
              <BrandsSlider brand={brand} key={brand._id}></BrandsSlider>
            ))
          ) : (
            <NotFound></NotFound>
          )}
        </div>
      </div>

      {/* brands card collection */}
      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto px-4 lg:px-0">
        <h3 className="font-cute text-3xl lg:text-5xl text-left font-extrabold text-slate-700 mt-12 mb-5">
          Choose One!!!
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 lg:px-0">
          {brandsData ? (
            brandsData.map((brand) => (
              <BrandsCards brandItem={brand} key={brand._id}></BrandsCards>
            ))
          ) : (
            <NotFound></NotFound>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandsCollection;
