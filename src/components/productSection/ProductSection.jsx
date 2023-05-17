import React, { useState } from "react";
import { storeData } from "../../assets/data/dummyData";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/productSlice";
import { addToCart } from "../../features/CartSlice";

const ProductSection = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const [loaded, setLoaded] = useState(false);
  const handleImageLoad = () => {
    setLoaded(true);
  };

  const filtered = storeData.map((item,index)=>{
      if(item.type==="T-Shirts"){
        return(
          <section  key={index}>
              <div className="mx-4 w-fit relative  rounded-xl shadow-lg shadow-gray-400">
                <div className=" h-96 mt-2 rounded-xl mb-2">
                  {!loaded && (
                    <span className="loader w-32 h-32 after:w-32 after:h-32 before:w-32 before:h-32 left-1/3 top-1/3 "></span>
                  )}
                  <Link to={`/FilterProduct/${type}/` + item.id}>
                    <img
                      onClick={() => dispatch(singleProduct(item.id))}
                      className={`w-full h-full object-cover rounded-xl shadow-lg shadow-blue-400 ${
                        loaded ? "" : "hidden"
                      }`}
                      src={item.img}
                      alt="product"
                      onLoad={handleImageLoad}
                    />
                  </Link>
                </div>
                <div className="py-2">
                  <div className="flex items-center justify-between mx-2 mb-2">
                    <h2 className=" font-medium">{item.name}</h2>
                    <h2 className="font-medium">${item.price}.00</h2>
                  </div>
                  <p className="font-normal tracking-wider text-center opacity-75 ">
                    {item.text}
                  </p>
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
            </section>
        )
      }})

    return (
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mx-5 md:mx-10 py-4 justify-items-center gap-12">
        {filtered}
      </div>
    );
  };

export default ProductSection;
