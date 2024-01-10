import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";

const Header = () => {
  const cartItemCount = useSelector((state) => state.cart.items.length);

  return (
    <header className="header">
      <nav>
        <ul className="nav-link">
          <li>
            <Link className="link" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/cart">
              Корзина: {cartItemCount}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
