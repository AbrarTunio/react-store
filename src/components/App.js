import Banner from "./Banner";
import Cart from "./Cart.js";
import ShoppingList from "./ShoppingList";
import logo from "../assests/junglelogo.png";
import Footer from "./Footer";
import { useState } from "react";
import "../styles/Layout.css";

function App() {
  const [cart, updateCart] = useState([]);

  return (
    <div style={{ height: 110 }}>
      <Banner>
        <img src={logo} alt="Jungle House" className="jh-logo" />
        <h1 className="jh-title">Jungle House</h1>
      </Banner>
      <div className="jh-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
