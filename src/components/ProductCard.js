import "../assets/scss/productCard.scss";
import dogImage from "../assets/images/dogg.jpg";
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
    items = items.splice(index, 1);
    if (!cartItems.includes(items[0])) {
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
        <img src={dogImage} alt="product" />
        <div className="caption">Best Seller</div>
        <button className="add-to-cart" onClick={addItem}>
          ADD TO CART
        </button>
      </div>

      <section className="product__details">
        <div className="others">
          <div className="details">
            <p>People</p>
            <h3>Red Bench</h3>
            <p className="price">$3.89 {val}</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductCard;
