import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handelOpen = () => setOpen(!isOpen);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const user =useSelector((state)=> state.user.user)
  const {name}=user

  return (
    <>
      <header>
        <div className="bg-black">
          <h1 className="text-white font-bold text-xl text-center tracking-normal leading-none">
            Welcome {name.charAt("0").toUpperCase() + name.slice(1)}
          </h1>
        </div>
        <div className="flex md:justify-around justify-between items-center  ">
          <div>
            <img className="w-[70%] md:w-full" src={logo} alt="logo" />
          </div>
          <div className="flex items-center">
            <button
              onClick={() => dispatch(logout())}
              className="flex gap-1 justify-center items-center font-medium text-center tracking-normal leading-none md:text-base text-sm mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              Logout
            </button>
            
            <div className="flex items-center relative">
              <button onClick={handelOpen}>
                {totalAmount > 0 ? (
                  <span className="bg-green-400 text-white rounded-full px-3 py-1 text-sm">
                    {totalAmount}
                  </span>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#000"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                )}
              </button>
              <p className="font-medium text-center tracking-normal leading-none text-base mr-4">
                Shopping bag
              </p>
              <div>
                {isOpen && <Cart openModel={isOpen} setOpen={setOpen} />}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black flex justify-around p-4 w-full">
          <div className="text-white font-bold md:text-xl text-sm text-center tracking-normal leading-none">
            50% OFF
          </div>
          <div className="text-white font-bold md:text-xl text-sm text-center tracking-normal leading-none">
            Free Shipping and returns
          </div>
          <div className="text-white font-bold md:text-xl text-sm text-center tracking-normal leading-none">
            Different payment methods
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
