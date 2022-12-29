/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import { products } from "../constants/products";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const addItems = (val) => {
    const description = document.getElementById(val.id).value;
    setCart([...cart, { ...val, description }]);
  };
  const deleteItem = (id) => {
    const modifiedCart = cart?.filter((item) => item.id !== id);
    setCart(modifiedCart);
  };
  const handleCheckOut = () => {
    console.log(cart);
    // router.push("/thankyou");
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" md:flex-row flex flex-col gap-4 mt-[100px]">
        {" "}
        {products.map((val) => {
          return (
            <div className="border p-4">
              <img src={val.image} alt="" className=" h-[250px]" />
              <div className="flex justify-center mt-2 text-2xl">
                {val.name}
              </div>{" "}
              <div className="flex justify-center mt-2">${val.price}</div>
              <div className="flex mt-5 justify-center">
                <input
                  className="border p-2"
                  id={`${val.id}`}
                  placeholder="Add description"
                  type="text"
                />
              </div>
              <div className="flex mt-5 justify-center">
                {cart.some((item) => val.id === item.id) ? (
                  <button
                    onClick={() => deleteItem(val.id)}
                    className="rounded-full border p-3 bg-slate-200"
                  >
                    Delete From cart
                  </button>
                ) : (
                  <button
                    onClick={() => addItems(val)}
                    className="rounded-full border p-3 bg-slate-200"
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className=" mt-6 flex justify-end items-end ">
        {cart.length ? (
          <button
            className="rounded-full p-4 bg-orange-500 flex border items-start"
            onClick={() => handleCheckOut()}
          >
            Checkout
            <span className="ml-2 text-[12px] text-green-800">
              {cart.length}
            </span>
          </button>
        ) : null}
      </div>
    </div>
  );
};
export default Index;
