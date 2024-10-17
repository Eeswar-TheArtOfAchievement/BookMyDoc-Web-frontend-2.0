import { Button, ButtonGroup } from "@mui/material";
import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContextProvider";

const CartItem = ({ id, src, price }) => {
  const { addToCart, removeFromCart, cartItem, updateCartItems } =
    useContext(ShopContext);
  return (
    <div className="profd" key={id}>
      <img width={50} height={50} src={src} alt="" />
      <ButtonGroup>
        <Button onClick={() => removeFromCart(id)}>-</Button>
        <input width={5}
          type="number"
          value={cartItem[id]}
          onChange={(e) => updateCartItems(Number(e.target.value), id)}
        />
        <Button onClick={() => addToCart(id)}>+</Button>
      </ButtonGroup>
      <div className="price right">{price}rs</div>
    </div>
  );
};

export default CartItem;
