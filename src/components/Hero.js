import "../assets/scss/hero.scss";
import first from "../assets/images/first.png";
import second from "../assets/images/second.png";
import third from "../assets/images/third.png";
import { useContext } from "react";
import { Context } from "../Context";

const Hero = () => {
  const [, , cartItems, setCartItems, , , , product] = useContext(Context);
  const cartNames = [...cartItems].map((val) => val.name);
  const addItem = () => {
    const itemName = product[4].name;
    if (!cartNames.includes(itemName)) {
      setCartItems([...cartItems, product[4]]);
    }
  };

  return (
    <section className="hero">
      <h1>{product[4].name}</h1>
      <div className="hero__img">
        <img src={product[4].image.src} alt="product" />
        <div className="caption">Photo of the Day</div>
      </div>
      <button className="cart-btn" onClick={addItem}>
        {cartNames.includes(product[4].name)
          ? "REMOVE FROM CART"
          : "ADD TO CART"}
      </button>
      <section className="about">
        <div className="about__pet">
          <h3>About the Samurai King Resting</h3>
          <h5>Pets</h5>
          <p>{product[4].details.description}</p>
        </div>
        <div className="about__others">
          <h3>People also buy</h3>
          <div className="img__cards">
            <img src={first} alt="first featured" />
            <img src={second} alt="second featured" />
            <img src={third} alt="third featured" />
          </div>
          <div className="details">
            <h3>Details</h3>
            <p>
              Size: <span>1020 X 1020 pixel</span>
            </p>
            <p>
              Size: <span>15 mb</span>
            </p>
          </div>
        </div>
      </section>
      <hr className="hero__line" />
    </section>
  );
};

export default Hero;
