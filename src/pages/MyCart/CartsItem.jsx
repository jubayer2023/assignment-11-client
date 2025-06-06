import { Link } from "react-router-dom";
import swal from "sweetalert";

const CartsItem = ({ cartItem, carts, setCarts }) => {
  const { _id, name, brand_name, type, price, description, rating, image } =
    cartItem;

  const handleDelete = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Cart!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://brandshop-server-side-project-jb0f6tjfs.vercel.app/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              swal("Poof! Your Cart has been deleted!", {
                icon: "success",
              });
              const remaining = carts.filter((cart) => cart._id !== _id);
              setCarts(remaining);
            }
          });
      } else {
        swal("Your Cart is safe!");
      }
    });
  };

  return (
    <div className="p-4 shadow-lg rounded-md bg-slate-500 flex flex-col">
      <figure>
        <img
          src={image}
          className="rounded-md w-full h-[150px] md:h-[200px] lg:h-[220px]"
          alt=""
        />
      </figure>
      <div className="flex-grow text-neutral-200">
        <h3 className="flex justify-between items-center text-gray-900 text-3xl font-bold font-cute my-2">
          <span>{name}</span>
          <span>{brand_name}</span>
        </h3>
        <p className="text-sm font-semibold">{description}</p>
        <h3 className="flex justify-between items-center text-sm font-semibold my-2">
          <span>{type}</span>
          <span>Price : {price} $ </span>
        </h3>
        <p className="mb-2 text-sm font-semibold">Rating : {rating} </p>
      </div>
      <div className="mt-auto flex items-center justify-between">
        <Link to={`/update/${_id}`}>
          <button className="btn btn-sm btn-outline hover:bg-pink-500 text-white bg-slate-700">
            Update
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-outline hover:bg-pink-500 text-white bg-slate-700"
        >
          Dlete
        </button>
      </div>
    </div>
  );
};

export default CartsItem;
