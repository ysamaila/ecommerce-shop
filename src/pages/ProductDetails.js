import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  const product = products?.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center text-2xl font-semibold">
        Loading...
      </section>
    );
  }
  const { title, price, description, image } = product;
  return (
    <section className="pt-32 pb-12 h-screen lg:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              src={image}
              alt={image}
              className="max-w-[200px] lg:max-w-sm"
            />
          </div>
          <div className="flex-1 text-center lg:text-left mb-8">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-0">{description}</p>
            <button
              className="bg-primary py-4 px-8 text-white mt-8"
              onClick={() => addToCart(product, product.id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
