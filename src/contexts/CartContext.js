import React, { useEffect, createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: cartItem.amount + 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const increaseAmount = (id) => {
    const item = cart?.filter((item) => item.id === id);
    addToCart(item, id);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart?.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = cart?.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem?.amount < 2) {
      removeFromCart(id);
    }
  };

  const emptyCart = () => {
    setCart([]);
  };

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, current) => {
        return accumulator + current.amount;
      }, 0);
      setItemAmount(amount);
      const total = cart.reduce((accumulator, current) => {
        return accumulator + current.amount * current.price;
      }, 0);
      setTotal(parseFloat(total).toFixed(2));
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        emptyCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
