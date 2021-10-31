import "../assets/scss/hero.scss";
import dogImage from "../assets/images/dogg.jpg";
import first from "../assets/images/first.png";
import second from "../assets/images/second.png";
import third from "../assets/images/third.png";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Samurai King Resting</h1>
      <div className="hero__img">
        <img src={dogImage} alt="product" />
        <div className="caption">Photo of the Day</div>
      </div>
      <button className="cart-btn">ADD TO CART</button>
      <section className="about">
        <div className="about__pet">
          <h3>About the Samurai King Resting</h3>
          <h5>Pets</h5>
          <p>
            So how did the classical Latin become so incoherent? According to
            the mcClintock, a 15th century typesetter likely scrammbled part of
            Ciecero De Finibus in order to provide placeholder text to mockup
            various fonts for a type specimen book.
          </p>
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
