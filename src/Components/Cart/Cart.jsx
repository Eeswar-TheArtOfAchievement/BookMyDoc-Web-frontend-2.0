import React, { useContext, useState } from "react";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import "./Cart.css";
import { Button } from "@mui/material";
import { Lock } from "@mui/icons-material";
import { RentalProducts } from "../Rental/RentalProducts";
import { ShopContext } from "../Context/ShopContextProvider";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
const Cart = ({ id }) => {
  const { cartItem, getTotalCart, getTotalCartAmount } =
    useContext(ShopContext);
  let [promo, setPromo] = useState(0);
  const handlepromo = () => {
    let code = document.getElementById("promoc").value;
    if (code === "save100" || code === "Save100" || code === "SAVE100") {
      setPromo(100);
      window.alert("hidden promocode of 100 rupees applied successfully");
    }
  };
  const ShippingCost = 79;
  const tax = (3.13 / 100) * getTotalCartAmount();
  const Discount = 100;
  return (
    <div id="cart">
      <div className="center header">
        <ShoppingCartRoundedIcon></ShoppingCartRoundedIcon>MY CART
      </div>
      <div className="content">
        <div className="content1">
          {RentalProducts.map(({ src, id, price }) => {
            if (cartItem[id] !== 0) {
              return <CartItem src={src} id={id} price={price} />;
            }
          })}
          <span className="center">
            {getTotalCart() > 0
              ? "Total items in the cart ::-)" + getTotalCart()
              : ""}
          </span>
        </div>
        <div className="content2">
          <input type="text" placeholder="enter promocode" id="promoc" />
          <Button variant="contained" onClick={handlepromo}>
            Apply
          </Button>
          <div className="money">
            <span>Packaging charges</span> <span>{ShippingCost}rs</span>
            <span>Fixed Discount</span>
            <span>{Discount}rs</span>
            <span>Tax 3.13%</span> <span>{tax}rs</span>
            <span>Estimated Total cost</span>{" "}
            <span>{getTotalCartAmount()}</span>
            <span>Effective Price </span>
            <span>
              {getTotalCartAmount() - promo + ShippingCost - Discount + tax}
            </span>
            <span>
              <Link to="/payment"> <Button variant="contained">
                <Lock></Lock> Checkout
              </Button></Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
