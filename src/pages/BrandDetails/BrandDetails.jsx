import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const BrandDetails = () => {
  const singleBrandData = useLoaderData();

  const { name, brand_name, type, price, description, rating, image } =
    singleBrandData || {};

  // console.log(singleBrandData);

  const cartBrands = {
    name,
    brand_name,
    type,
    price,
    description,
    rating,
    image,
  };

  const handleAddToCart = () => {
    fetch("https://brandshop-server-side-project-jb0f6tjfs.vercel.app/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartBrands),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal({
            title: "Good job!",
            text: "You added this successfully!",
            icon: "success",
            button: "Cool!",
          });
        }
      });
  };

  return (
    <div className="bg-slate-300">
      <h3 className="font-cute  text-center text-3xl lg:text-5xl font-extrabold text-slate-700 py-5">
        Product Details
      </h3>

      <div className="flex flex-col md:flex-row gap-5 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto px-4 lg:px-0 pb-24">
        <div className="flex-1 p-5 shadow-lg rounded-md ">
          <figure>
            <img src={image} className="rounded-md" alt="" />
          </figure>
        </div>
        <div className="flex-1 bg-neutral-100 flex items-center p-5 rounded-md shadow-lg">
          <div className=" text-gray-800 font-semibold text-sm space-y-2">
            <h3 className="text-3xl font-bold capitalize ">{name}</h3>
            <h4 className="text-3xl font-bold capitalize ">{brand_name}</h4>
            <p>{type}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>{rating}</p>
            <button
              onClick={handleAddToCart}
              className="btn btn-sm btn-outline hover:bg-green-600 bg-slate-700 text-neutral-50 capitalize"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
