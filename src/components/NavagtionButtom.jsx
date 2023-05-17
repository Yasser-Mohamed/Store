import React from "react";
import clothes from "../assets/images/clothes.jpg";
import { filterProduct } from "../features/productSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavagtionButtom = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="flex items-center justify-center py-8 flex-wrap">
        {buttons.map((button, index) => {
          return (
            <div key={index}>
              <Link to={"/filterProduct/"+button}>
                <button
                  onClick={() => dispatch(filterProduct(button))}
                  className="btn bg-white"
                >
                  {button}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="md:w-[55%] w-full py-2 mx-auto bg-black rounded-xl ">
        <h3 className="text-red-700 text-center font-bold text-lg">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex justify-center items-center py-4">
        <img
          className="md:h-[550px] md:w-[70%] w-[95%] h-[200px] rounded-md shadow-lg shadow-gray-400 "
          src={clothes}
          alt="clothes"
        />
      </div>
      <div className="md:w-[55%] w-full my-2 py-2 mx-auto bg-black rounded-xl ">
        <h3 className="text-red-700 text-center font-bold text-lg">
          SUMMER T-Shirt SALE 30%
        </h3>
      </div>
    </div>
  );
};

export default NavagtionButtom;
