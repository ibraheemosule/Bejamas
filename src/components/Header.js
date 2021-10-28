import "../assets/scss/header.scss";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/shopping-cart.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <img className="header__nav-logo" src={logo} alt="logo" />
        <div className="header__nav-cart">
          <img className="header__nav-cart__img" src={cart} alt="logo" />
        </div>
      </nav>
      <hr className="header__line" />
    </header>
  );
};

export default Header;
