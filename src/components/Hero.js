import "../assets/scss/hero.scss";
import dogg from "../assets/images/dogg.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Samurai King Resting</h1>
      <div className="hero__img">
        <img src={dogg} alt="product" />
      </div>
    </section>
  );
};

export default Hero;
