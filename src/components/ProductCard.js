import "../assets/scss/productCard.scss";
import { Context } from "../Context";
import { useContext } from "react";

const ProductCard = (props) => {
  const { index, val } = props;
  const [, , cartItems, setCartItems, page] = useContext(Context);

  const mouseover = () => {
    const button = document.getElementsByClassName("add-to-cart")[index];
    button.style.marginBottom = "0";
    button.classList.add("hovered");
  };

  const mouseleave = () => {
    const button = document.getElementsByClassName("add-to-cart")[index];
    button.classList.remove("hovered");
    button.style.marginBottom = "-50px";
  };

  const addItem = () => {
    let items = [...page];
    const names = items.map((val) => val.name);
    const cartNames = [...cartItems].map((val) => val.name);
    items = items.splice(index, 1);
    if (!cartNames.includes(items[0].name)) {
      setCartItems([...cartItems, ...items]);
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
        <button className="add-to-cart" onClick={addItem}>
          ADD TO CART
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
