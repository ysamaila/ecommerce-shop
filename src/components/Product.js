import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 p-1 flex flex-col items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:right-5">
          <div>
            <div
              className="flex justify-center items-center w-12 h-12 text-white bg-red-500 hover:bg-red-700"
              onClick={() => addToCart(product, id)}
            >
              <BsPlus className="text-3xl" />
            </div>
            <Link
              to={`/product/${id}`}
              className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1 ">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
          <div className="font-semibold"> $ {price}</div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
