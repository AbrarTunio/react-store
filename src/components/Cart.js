import { useState } from "react";
// import "../styles/experiments.css";
import "../styles/Cart.css";
function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(false);

  let total = 0;
  cart.forEach((plantInCart) => {
    total += plantInCart.price * plantInCart.qty;
  });

  return isOpen ? (
    <div className="jh-cart">
      <h2> My Cart </h2>
      {cart.map(({ name, price, qty }, idx) => (
        <p>
          {" "}
          {name} {price} Euro x {qty}
        </p>
      ))}
      <button
        className="jh-cart-add-button"
        onClick={() => updateCart(cart + 1)}
      >
        Add More
      </button>
      <button className="jh-cart-clear-button" onClick={() => updateCart([])}>
        Clear Cart
      </button>
      <h3>Total : {total} </h3>
      <button className="jh-cart-close-button" onClick={() => setIsOpen(false)}>
        Close Cart
      </button>
    </div>
  ) : (
    <div className="jh-cart-closed">
      <button onClick={() => setIsOpen(true)}> Open Cart </button>
    </div>
  );
}

export default Cart;
