import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CardProduct from "./cardProduct";

const FilterProduct = () => {
  const products = useSelector((state) => state.products.filterProduct);
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <div className="pt-16">
      <div className="pl-14">
        <h1 className="text-4xl font-bold tracking-normal leading-none text-gray-600">
          {type}
        </h1>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-4 justify-items-center gap-12  ">
        {products
          .filter((product) => product.type === type)
          .map((product, index) => {
            return (
              <div key={index}>
                <CardProduct
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  price={product.price}
                  img={product.img}
                ></CardProduct>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FilterProduct;
