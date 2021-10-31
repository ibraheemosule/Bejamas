import "../assets/scss/header.scss";
import logo from "../assets/images/logo.svg";
import dogg from "../assets/images/dogg.jpg";
import remove from "../assets/images/trash-outline.svg";
import cancel from "../assets/images/cancel.svg";
import cart from "../assets/images/shopping-cart.svg";
import { useContext } from "react";
import { Context } from "../Context.js";

const Header = () => {
  const [, , cartItems, setCartItems] = useContext(Context);

  const display = (value) => {
    const el = document.getElementsByClassName("cart-list")[0];
    el.style.display = value;
  };

  const deleteItem = (i) => {
    const item = [...cartItems];
    item.splice(i, 1);
    setCartItems(item);
    console.log(cartItems);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <img className="header__nav-logo" src={logo} alt="logo" />
        <div className="header__nav-cart">
          <img
            onClick={() => display("block")}
            className="header__nav-cart__img"
            src={cart}
            alt="logo"
          />
          <span>{cartItems.length}</span>
          <div className="cart-list">
            <img
              onClick={() => display("none")}
              className="close"
              src={cancel}
              alt="close icon"
            />
            {cartItems.map((val, i) => (
              <div className="selectedItem" key={i}>
                <div>
                  <h5 className="product-name">Samurai {val}</h5>
                  <p className="product-price">$1000.00</p>
                </div>
                <img className="item-image" src={dogg} alt="item" />
                <img
                  className="remove-item"
                  onClick={() => deleteItem(i)}
                  src={remove}
                  alt="remove item"
                />
              </div>
            ))}
            {!cartItems.length ? (
              <h5 className="no-items"> NO ITEMS IN THE CART</h5>
            ) : (
              ""
            )}
            <hr className="line" />
            <button
              className="cart-btn"
              onClick={() => {
                setCartItems([]);
                display("none");
              }}
            >
              CLEAR
            </button>
          </div>
        </div>
      </nav>
      <hr className="header__line" />
    </header>
  );
};

export default Header;
