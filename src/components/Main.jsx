import React, { useState } from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import NavagtionButtom from "./NavagtionButtom";
import ProductSection from "./productSection/ProductSection";
import Footer from "./Footer";

function Main() {
  const [loaded, setLoaded] = useState(false);
  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      {!loaded && (
        <div className="flex justify-center items-center h-[100vh] bg-gray-950">
          <span className="mainLoader  p-0 m-0"></span>
        </div>
      )}
      <main onLoad={handleImageLoad}>
        <Navbar />
        <Slider />
        <NavagtionButtom />
        <ProductSection />
        <Footer />
      </main>
    </>
  );
}

export default Main;
