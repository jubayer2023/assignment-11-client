import { Link } from "react-router-dom";

const BrandsCards = ({ brandItem }) => {
  const { _id, name, brand_name, type, price, description, rating, image } =
    brandItem;

  return (
    <div className="p-4 shadow-lg rounded-md bg-slate-500 flex flex-col">
      <figure>
        <img
          src={image}
          className="rounded-md w-full h-[200px] md:h-[250px] lg:h-[350px]"
          alt=""
        />
      </figure>
      <div className="flex-grow text-neutral-200">
        <h3 className="flex justify-between items-center text-gray-900 text-3xl font-bold font-cute my-3">
          <span>{name}</span>
          <span>{brand_name}</span>
        </h3>
        <p className="text-sm font-semibold">{description}</p>
        <h3 className="flex justify-between items-center text-sm font-semibold my-3">
          <span>{type}</span>
          <span>Price : {price} $ </span>
        </h3>
        <p className="mb-3 text-sm font-semibold">Rating : {rating} </p>
      </div>
      <div className="mt-auto flex items-center justify-between ">
        <Link to={`/brands/${brand_name}/${_id}`}>
          <button className="btn btn-sm btn-outline hover:bg-pink-500 text-white bg-slate-700">
            See Details
          </button>
        </Link>
        <Link to={`/updateBrand/${brand_name}/${_id}`}>
          <button className="btn btn-sm btn-outline hover:bg-pink-500 text-white bg-slate-700">
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BrandsCards;
