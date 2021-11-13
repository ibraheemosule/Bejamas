import "../assets/scss/productCard.scss";
import { Context } from "../Context";
import { useContext, useEffect, useRef, useState } from "react";

const ProductCard = ({ index, val }) => {
  const [state, , cartItems, setCartItems] = useContext(Context),
    button = useRef(null),
    [width, setWidth] = useState(window.innerWidth),
    [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (width < 800) {
      button.current.style.marginBottom = "0";
      button.current.classList.add("hovered");
    } else {
      button.current.classList.remove("hovered");
      button.current.style.marginBottom = "-50px";
    }
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  const mouseover = () => {
    button.current.style.marginBottom = "0";
    button.current.classList.add("hovered");
  };

  const mouseleave = () => {
    if (width > 800) {
      button.current.classList.remove("hovered");
      button.current.style.marginBottom = "-50px";
    }
  };

  const addItem = () => {
    let items = [...state];
    const itemName = button.current.id,
      cartNames = [...cartItems].map((val) => val.name);
    setClickCount(() => clickCount + 1);

    if (clickCount % 2 === 0) {
      items = items.filter((item) => item.name === itemName);
      if (!cartNames.includes(itemName)) {
        setCartItems([...cartItems, ...items]);
      }
    } else {
      items = [...cartItems].filter((item) => item.name !== itemName);
      setCartItems([...items]);
    }
  };

  return (
    <section className="product">
      <div
        className="product__img"
        onMouseOver={mouseover}
        onMouseLeave={mouseleave}
      >
        <img src={val.image.src} alt="product" />
        {val.bestseller ? <div className="caption">Best Seller</div> : ""}
        <button
          ref={button}
          className="add-to-cart"
          onClick={addItem}
          id={val.name}
        >
          {clickCount % 2 === 1 ? "REMOVE FROM CART" : "ADD TO CART"}
        </button>
      </div>

      <section className="product__details">
        <div className="others">
          <div className="details">
            <p>{val.category}</p>
            <h3>{val.name}</h3>
            <p className="price">$ {val.price}</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductCard;
