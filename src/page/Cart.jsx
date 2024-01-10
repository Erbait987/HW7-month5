import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Ваша корзина</h2>
      <div className="cart">
        {cartItems.map((item, index) => (
          <div className="item-card added" key={index}>
            <img width={200} height={150} src={item.thumbnail} alt="items" />
            <div>
              <h2>{item.brand}</h2>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
