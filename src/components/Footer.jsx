import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="flex justify-center items-center mt-10">
        <hr className="h-px w-4/5 bg-gray-400 opacity-50 border-none outline-none " />
      </div>
      <div className="flex justify-around items-center flex-col md:flex-row pb-4">
        <div className="">
          <img className="h-20 md:h-24" src={logo} alt="logo" />
        </div>
        <div>
          <p className="text-black text-base no-underline normal-case">
            Copyright &copy; {year} page by{" "}
            <a
              className="text-green-400 font-bold hover:shadow-green-200 hover:shadow-lg"
              href="https://yasser-mohamed.github.io/My-Web/"
            >
              Yasser-Mohamed
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
