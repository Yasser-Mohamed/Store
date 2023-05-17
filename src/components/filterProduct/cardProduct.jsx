import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/productSlice";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../../features/CartSlice";

const CardProduct = ({ id, name, text, img, size, price, color }) => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const [loaded, setLoaded] = useState(false);
  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="mx-4 w-fit relative  rounded-xl shadow-lg shadow-gray-400">
      <div className=" h-96 mt-2 rounded-xl mb-2">
        {!loaded && (
          <span className="loader w-32 h-32 after:w-32 after:h-32 before:w-32 before:h-32 left-1/3 top-1/3 "></span>
        )}
        <Link to={`/FilterProduct/${type}/` + id}>
          <img
            onClick={() => dispatch(singleProduct(id))}
            className={`w-full h-full object-cover rounded-xl shadow-lg shadow-blue-400 ${
              loaded ? "" : "hidden"
            }`}
            src={img}
            alt="product"
            onLoad={handleImageLoad}
          />
        </Link>
      </div>
      <div className="py-2">
        <div className="flex items-center justify-between mx-2 mb-2">
          <h2 className=" font-medium">{name}</h2>
          <h2 className="font-medium">${price}.00</h2>
        </div>
        <p className="font-normal tracking-wider text-center opacity-75 ">
          {text}
        </p>
        <button
          onClick={() =>
            dispatch(
              addToCart({
                id: id,
                name: name,
                color: color,
                img: img,
                text: text,
                size: size,
                price: price,
                amount: 1,
                totalPrice: price,
              })
            )
          }
          className="flex justify-center items-center gap-2 w-[90%] mx-auto  py-2 rounded-lg bg-gray-300  uppercase text-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
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
  );
};

export default CardProduct;
