import React, { useContext } from "react";

import { ShopContext } from "../Context/ShopContextProvider";
import { Button } from "@mui/material";
import "./Rental.css";
const Products = ({ id, name, price, src }) => {
  const { addToCart, cartItem } = useContext(ShopContext);
  const cartItemAmount = cartItem[id];

  return (
    <div className="product">
      <img height={220} src={src} key={id} alt="" />
      <figcaption>
        {id}.{name}
      </figcaption>
      <span className="center">
        price per &nbsp;<b> hour</b> :- {price}rs&nbsp;
        <Button variant="contained" onClick={() => addToCart(id)}>
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </Button>
      </span>
    </div>
  );
};

export default Products;
