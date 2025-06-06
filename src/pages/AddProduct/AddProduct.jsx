const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand_name = form.brand_name.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const image = form.image.value;

    // banner part start
    // const bannerInfo = {
    //   name,
    //   brand_name,
    //   image,
    // };
    // console.log(bannerInfo);
    // fetch("https://brandshop-server-side-project-jb0f6tjfs.vercel.app/banner", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(bannerInfo),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       console.log("success!");
    //     }
    //   });
    // banner part ends here

    const brandsInfo = {
      name,
      brand_name,
      type,
      price,
      description,
      rating,
      image,
    };

    console.log(brandsInfo);
    fetch("https://brandshop-server-side-project-jb0f6tjfs.vercel.app/brands", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brandsInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="bg-slate-300 py-8">
      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto px-4 lg:px-0">
        <h3 className="text-2xl md:text-4xl text-center font-bold text-green-900 py-5">
          Add Product Here!!
        </h3>
        <form
          onSubmit={handleAddProduct}
          className="form-control space-y-5 drop-shadow-md"
        >
          {/* first row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <label className="input-group input-group-vertical">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </label>
            <label className="input-group input-group-vertical">
              <span>Brand Name</span>
              <input
                type="text"
                name="brand_name"
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
                placeholder="Type"
                className="input input-bordered"
              />
            </label>
            <label className="input-group input-group-vertical">
              <span>Price</span>
              <input
                type="text"
                name="price"
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
                placeholder="Short description"
                className="input input-bordered"
              />
            </label>
            <label className="input-group input-group-vertical">
              <span>Rating</span>
              <input
                type="text"
                name="rating"
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
                placeholder="Image URl"
                className="input input-bordered"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Add Product"
            className="text-gray-600 text-lg font-semibold text-center btn btn-md btn-outline btn-primary"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
