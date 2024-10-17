import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { ShopContext } from "../Context/ShopContextProvider";
import { Menu, MenuBook, MenuBookOutlined } from "@mui/icons-material";
const Navbar = ({ cart, setCart }) => {
  const { getTotalCart } = useContext(ShopContext);
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false );
  const [notifications, setNotifications] = useState(3);
  const toggleSideMenu = () => {
    setSideMenuOpen(!isSideMenuOpen);
  };
  return (
    <>
    <div id="navbar">
      <div className="navlogo">
      <img className="imglogo" src={logo} alt="Logo" />
        <Link className="li" to="/">
          BookMyDoc
        </Link>
      </div>
      <ul className="ulnav">
        <li>
          <Link className="li" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="li" to="/agro">
            Agro
          </Link>
        </li>
        <li>
          <Link className="li" to="/posts">
            Posts
          </Link>
        </li>
        <li>
          <Link className="li " to="/rental">
            Rental
          </Link>
        </li>
        <li>
          <Link className="li" to="/cart">
            <ShoppingCartRoundedIcon />
            <sup>
              <sup>{getTotalCart() > 0 ? getTotalCart() : ""}</sup>
            </sup>
          </Link>
        </li>
        <li>
          <div className="rounded">
          <Link className="li" onClick={toggleSideMenu}>
            <Menu  ></Menu>
          </Link>
          {isLoggedIn ? (
          <Link className="li" to="/register">
          <AccountCircleIcon className="icon" ></AccountCircleIcon>
          {notifications > 0 && <span className="notification-dot"></span>}
        </Link>
        ) : (
          <Link className="li" to="/login">
            <AccountCircleIcon></AccountCircleIcon>
          </Link>
        )}
          
          </div>
        </li>
      </ul>
    </div>
    {isSideMenuOpen && (
        <aside className="side-menu">
          <ul>
            {!isLoggedIn && <Link to='/login' ><li >Log in</li></Link>}
            {!isLoggedIn && <Link to='/register' ><li >Sign up</li></Link>}
            {isLoggedIn && <Link to="">
              {notifications > 0 && <span className="notification-dot1"></span>}
              <li>Notifications</li>
            </Link>}
            {isLoggedIn && <Link to=""><li>Account</li></Link>}
            <hr />
            {!isLoggedIn && <Link to=""><li >About</li></Link>}
            <Link to="/help"><li>Help</li></Link>
            {isLoggedIn && <Link to=""><li to="">Log out</li></Link>}
          </ul>
        </aside>
      )}
    </>
  );
};

export default Navbar;
