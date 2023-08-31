import React from "react";
import Woman from "../img/woman_hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" h-[500px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div> New Arrivals
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            SUMMER SALES STYLISH
            <br />
            <span className="font-semibold">WOMEN</span>
          </h1>
          <Link
            className="self-start uppercase font-semibold border-b-2 border-primary"
            to="/"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block h-[400px] ">
          <img src={Woman} alt={Woman} className="h-[100%]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
