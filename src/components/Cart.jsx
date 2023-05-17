import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/CartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  return (
    <div className="absolute h-[60vh] lg:w-[500%] w-[300%] right-0 top-14  flex justify-center z-10 bg-gray-200 rounded-lg">
      <div className=" w-full h-full left-0 right-0 relative overflow-y-auto ">
        {items.length > 0 ? (
          <ul className="h-full relative">
            {items.map((item, index) => {
              return (
                <li
                  key={index}
                  className="m-3 text-xl bg-white flex items-center justify-between rounded-xl "
                >
                  <div>
                    <img
                      className="w-20 m-1 rounded-xl"
                      src={item.img}
                      alt={item.name}
                    />
                    <h4>{item.name}</h4>
                  </div>
                  {item.size && <span className="text-xl">{item.size}</span>}
                  <div>
                    <span>
                      #: {item.amount}
                      <br />{" "}
                    </span>
                    <span>price: ${item.price}.00</span>
                  </div>
                  <button
                    className="mx-2"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </li>
              );
            })}
            <li className="flex flex-col m-3 text-xl w-[95%]  relative bottom-2">
              <h3 className="p-2 font-black uppercase">
                total: <span className="float-right">${totalPrice}.00</span>
              </h3>
              <button className="btn">check out</button>
            </li>
          </ul>
        ) : (
          <div className="flex flex-col w-full h-full justify-center items-center ">
            <h3 className="text-3xl mb-3">Your Cart Is Empty</h3>
            <p>Add some product</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
