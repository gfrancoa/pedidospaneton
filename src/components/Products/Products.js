import React from "react";
import "./Products.css";

const Products = ({ productItems }) => {
  return (
    <div className="products">
      {productItems.map((item, index) => {
        return (
          <div className="card" key={index}>
            <p>{item.nombre}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
