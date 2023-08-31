import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return (
    <div className="w-full flex transition-all duration-300">
      <div className="min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={image} />
        </Link>
      </div>
      <div className=" flex items-center ml-2 justify-between ">
        <div className="flex flex-col items-center justify-start">
          <div className="flex">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div
              className="flex items-center"
              onClick={() => removeFromCart(id)}
            >
              <IoMdClose className="text-2xl text-gray-500 cursor-pointer hover:text-red-500" />
            </div>
          </div>
          <div className="flex justify-between items-center text-sm w-full ">
            <div className="flex justify-between items-center text-xs flex-1 mr-4 p-0 border">
              <div
                onClick={() => decreaseAmount(id)}
                className="h-full p-1 cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div className="">{amount}</div>
              <div
                className="h-ful p-1 cursor-pointer"
                onClick={() => increaseAmount(id)}
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 text-xs text-gray-400">
              ${parseFloat(price).toFixed(2)}
            </div>
            <div className="flex-1 text-xs">
              ${parseFloat(price * amount).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
