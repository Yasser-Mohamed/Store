import React, { useEffect } from "react";
import { nextSlide, preSlide, dotSlide } from "../features/SliderSlice";
import { useDispatch, useSelector } from "react-redux";
import { sliderData } from "../assets/data/dummyData";

const Slider = () => {
  const dispatch = useDispatch();
  const slideIndex = useSelector((state) => state.slider.value);

  return (
    <>
      <div className="relative pb-4 lg:w-full ">
        <div>
          {sliderData.map((item, index) => {
            return (
              <div
                key={item.id}
                className={
                  parseInt(item.id) === slideIndex
                    ? "opacity-100 duration-700 ease-in-out scale-100"
                    : "opacity-0 duration-700 ease-in-out scale-95"
                }
              >
                <div>
                  {parseInt(item.id) === slideIndex && (
                    <img
                      className="md:h-[850px] w-full"
                      src={item.img}
                      alt="img"
                    />
                  )}
                </div>
                <div className="absolute top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2  ">
                  <p className="text-white font-bold md:text-4xl text-2xl">
                    {parseInt(item.id) === slideIndex && item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex absolute  gap-5 bottom-12 left-1/2 -translate-x-1/2">
          {sliderData.map((dot, index) => {
            return (
              <div className="mr-4 " key={index}>
                <div
                  onClick={() => dispatch(dotSlide(index))}
                  className={
                    index === slideIndex
                      ? "bg-green-400 md:p-4 p-3 rounded-full cursor-pointer"
                      : "bg-white md:p-4 p-3 rounded-full cursor-pointer"
                  }
                ></div>
              </div>
            );
          })}
        </div>
        <button
          className="absolute top-1/2 right-4 bg-white rounded-full p-2 hover:bg-green-400"
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          className="absolute top-1/2 left-4 bg-white rounded-full p-2 hover:bg-green-400"
          onClick={() => dispatch(preSlide(slideIndex - 1))}
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Slider;
