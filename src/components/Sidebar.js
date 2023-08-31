import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, emptyCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full  shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex items-center justify-between border-b py-6">
        <div className="uppercase text-sm font-semibold">
          Shopping Cart ({itemAmount})
        </div>
        <div
          className="cursor-pointer h-8 w-8 flex justify-center items-center"
          onClick={handleClose}
        >
          <IoMdArrowForward className="2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[400px] lg:h-[450px] overflow-y-auto overflow-x-hidden border-b">
        <div className="py-4 text-xl ">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      <div>
        {cart?.length > 0 && (
          <div>
            <div className="flex  justify-between items-center">
              <div className="p-1 uppercase font-semibold">Total: ${total}</div>
              <div
                onClick={emptyCart}
                className="cursor-pointer py-4 bg-red-500 text-xl text-white w-12 h-12 flex justify-center items-center hover:bg-red-400"
              >
                <FiTrash2 />
              </div>
            </div>
            <div>
              <Link
                t0="/"
                className="bg-primary flex p-4 my-2 justify-center items-center text-white w-full font-medium"
              >
                Check out{" - "}
                <span className="font-italics"> (Under Construction)</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
