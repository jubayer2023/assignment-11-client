import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const Update = () => {
  const updateData = useLoaderData();
  const { _id, name, brand_name, type, price, description, rating, image } =
    updateData;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand_name = form.brand_name.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const image = form.image.value;

    const updateInfo = {
      name,
      brand_name,
      type,
      price,
      description,
      rating,
      image,
    };

    fetch(`https://brandshop-server-side-project-jb0f6tjfs.vercel.app/carts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal({
            title: "Good job!",
            text: "You Updated this successfully!",
            icon: "success",
            button: "Cool!",
          });
        }
      });
  };

  return (
    <div className="bg-slate-400 py-8">
      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto px-4 lg:px-0">
        <h3 className="text-2xl md:text-4xl text-center font-bold text-green-900 py-5">
          Update Here!!
        </h3>
        <form
          onSubmit={handleUpdate}
          className="form-control space-y-5 drop-shadow-md"
        >
          {/* first row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <label className="input-group input-group-vertical">
              <span>Name</span>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Name"
                className="input input-bordered"
              />
            </label>
            <label className="input-group input-group-vertical">
              <span>Brand Name</span>
              <input
                type="text"
                name="brand_name"
                defaultValue={brand_name}
                placeholder="Brand Name"
                className="input input-bordered"
              />
            </label>
          </div>
          {/* second row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <label className="input-group input-group-vertical">
              <span>Type</span>
              <input
                type="text"
                name="type"
                defaultValue={type}
                placeholder="Type"
                className="input input-bordered"
              />
            </label>
            <label className="input-group input-group-vertical">
              <span>Price</span>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered"
              />
            </label>
          </div>
          {/* third row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <label className="input-group input-group-vertical">
              <span>Short description</span>
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="Short description"
                className="input input-bordered"
              />
            </label>
            <label className="input-group input-group-vertical">
              <span>Rating</span>
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="Rating"
                className="input input-bordered"
              />
            </label>
          </div>
          {/* fourth row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <label className="input-group input-group-vertical">
              <span>Image</span>
              <input
                type="text"
                name="image"
                defaultValue={image}
                placeholder="Image URl"
                className="input input-bordered"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Submit"
            className="text-gray-600 text-lg font-semibold text-center btn btn-md btn-outline btn-primary"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
