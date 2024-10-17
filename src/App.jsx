import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Agro from "./Components/Agro/Agro";
import Posts from "./Components/Posts/Posts";
import Rental from "./Components/Rental/Rental";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Navbar/Footer";
import Register from "./Components/Registration/Register";
import Login from "./Components/Registration/Login";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import Help from "./Components/Navbar/Help";
import Feedback from "./Components/Navbar/Feedback";
import Contactus from "./Components/Navbar/Contactus";
import Location from "./Components/Navbar/Location";
import Payment from "./Payment";
function App() {
  let [cart, setCart] = useState(0);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agro" element={<Agro />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/rental" element={<Rental cart={cart} setCart={setCart} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Help />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/location" element={<Location />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
