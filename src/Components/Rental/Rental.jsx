import React from "react";
import "./Rental.css";
import { RentalProducts } from "./RentalProducts";
import Products from "./Products";
const Rental = ({ cart, setCart, id, name, price, src }) => {
  
  return (
    <div id="rental">
      {RentalProducts.map(({ id, name, src, price }) => {
        return (
          <Products key={id} id={id} name={name} src={src} price={price} />
        );
      })}
    </div>
  );
};

export default Rental;
