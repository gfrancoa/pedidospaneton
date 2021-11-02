import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Pedidos El Panetón
          </Link>
        </h1>
      </div>

      <div className="header-links">
        <ul>
          <li>
            <Link to="/cart" className="cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <div className="badge">
                <p className="badge-text">0</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
