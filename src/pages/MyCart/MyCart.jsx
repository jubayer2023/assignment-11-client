import { useLoaderData } from "react-router-dom";
import CartsItem from "./CartsItem";
import { useState } from "react";

const MyCart = () => {
  const cartsCollection = useLoaderData();
  const [carts, setCarts] = useState(cartsCollection);

  return (
    <div className="bg-slate-300 py-12">
      <h3 className="text-4xl font-bold text-center mb-10">
        My Cart Number is {cartsCollection.length}!!!
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto px-4 lg:px-0">
        {carts.map((cart) => (
          <CartsItem
            cartItem={cart}
            carts={carts}
            setCarts={setCarts}
            key={cart._id}
          ></CartsItem>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
