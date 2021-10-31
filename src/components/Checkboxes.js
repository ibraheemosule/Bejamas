import "../assets/scss/checkboxes.scss";
import cancel from "../assets/images/cancel.svg";
import { useState } from "react";

const Products = (props) => {
  let { show, showSorting } = props;

  const checkboxes = [
      "people",
      "premium",
      "pets",
      "foods",
      "landmarks",
      "cities",
      "nature",
    ],
    radios = ["lower than $20", "$20 - $100,", "$100 - $200", "more than $200"];

  let [filters, setFilters] = useState({
    people: false,
    premium: false,
    pets: false,
    foods: false,
    landmarks: false,
    cities: false,
    nature: false,
    price: false,
  });

  const clearCheckboxes = (e) => {
    e.preventDefault();
    const checkmark = document.getElementsByClassName("checkmark");
    for (let el of checkmark) {
      console.log(el.checked);
      el.checked = false;
    }
  };

  const changeFilter = (e) => {
    setFilters({
      ...filters,
      [e.target.value]: e.target.checked,
    });

    console.log(e.target.checked, filters);
  };

  const priceFilter = (e) => {
    setFilters({
      ...filters,
      price: e.target.value,
    });
    console.log(filters, e.target.value);
  };

  return (
    <aside className={`${show ? "sidebar" : " sidebar hide"}`}>
      <div className="header">
        <h3>{window.innerWidth < 600 ? "Filter" : "Categories"}</h3>
        {window.innerWidth < 600 ? (
          <button onClick={showSorting}>
            <img src={cancel} alt="cancel icon" />
          </button>
        ) : (
          ""
        )}
      </div>
      <form className="categories">
        {checkboxes.map((val, i) => (
          <label className="container" key={i}>
            {val}
            <input
              type="checkbox"
              id={i}
              value={val}
              onChange={(e) => changeFilter(e)}
            />
            <span className="checkmark"></span>
          </label>
        ))}
        <hr className="line" />
        <h3>Price range</h3>
        <div className="radio">
          {radios.map((val, i) => (
            <label className="container" key={i}>
              {val}
              <input
                type="radio"
                id={i}
                value={val}
                name="price"
                onChange={(e) => priceFilter(e)}
              />
              <span className="checkmark"></span>
            </label>
          ))}
        </div>
        <div className="reset">
          <button className="clear" onClick={clearCheckboxes}>
            Clear
          </button>
          <button className="save">Save</button>
        </div>
      </form>
    </aside>
  );
};

export default Products;
