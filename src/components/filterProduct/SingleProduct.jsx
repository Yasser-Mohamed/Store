import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/CartSlice";

const SingleProduct = () => {
  const products = useSelector((state) => state.products.singleProduct);
  const productSize = products[0].size ? products[0].size[0] : "";
  const [size, setSize] = useState(productSize);

  const { id } = useParams();
  const dispatch = useDispatch();

  return (
    <div>
      {products
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div
              className="flex justify-center items-center py-10 flex-col lg:flex-row"
              key={index}
            >
              <div className="lg:pl-44 grow-[2]">
                <img
                  className="lg:h-[850px] h-[550px] mb-5 rounded-lg"
                  src={item.img}
                  alt={item.name}
                />
              </div>
              <div className="grow-[3] text-center ">
                <div className="max-w-lg">
                  <h5 className="text-2xl pb-4 font-bold tracking-normal leading-none">
                    {item.name}
                  </h5>
                  <p className="text-orange-700 pb-4 text-lg font-bold tracking-normal leading-none ">
                    15% OFF
                  </p>
                  <p className="text-xl text-gray-600 pb-4 font-bold tracking-normal leading-none ">
                    {item.text}
                  </p>
                  <div>
                    {item.size ? (
                      <div>
                        <label
                          htmlFor="size"
                          className="mb-2 text-sm font-medium text-gray-900"
                        >
                          Pick a size
                        </label>
                        <select
                          onChange={(e) => setSize(e.target.value)}
                          name="size"
                          value={size}
                          id="size"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item.size.map((size, index) => {
                            return <option key={index}>{size}</option>;
                          })}
                        </select>
                      </div>
                    ) : (
                      <div>
                        <label
                          htmlFor="size"
                          className="mb-2 text-sm font-medium text-gray-900"
                        >
                          Pick a size
                        </label>
                        <select
                          onChange={(e) => setSize(e.target.value)}
                          name="size"
                          value={size}
                          id="size"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item?.size?.map((size, index) => {
                            return <option key={index}>{size}</option>;
                          })}
                        </select>
                      </div>
                    )}
                  </div>
                  <div className="my-4 ">
                    <button
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            name: item.name,
                            img: item.img,
                            text: item.text,
                            price: item.price,
                            amount: 1,
                            totalPrice: item.price,
                          })
                        )
                      }
                      className="flex justify-center items-center gap-2 w-full mx-auto  py-2 rounded-lg bg-gray-300  uppercase text-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                      Add to card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;
