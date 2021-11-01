import "../assets/scss/checkboxes.scss";
import cancel from "../assets/images/cancel.svg";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";

const Products = ({ show, showSorting, setPag }) => {
  const [state, , , , , setPage, pagination] = useContext(Context);

  const checkboxes = [
      "people",
      "premium",
      "pets",
      "food",
      "landmarks",
      "cities",
      "nature",
    ],
    radios = ["lower than $20", "$20 - $100", "$100 - $200", "more than $200"];

  let [filters, setFilters] = useState({
    price: "null",
    people: false,
    premium: false,
    pets: false,
    food: false,
    landmarks: false,
    cities: false,
    nature: false,
  });

  const changeFilter = (e) => {
    setFilters({
      ...filters,
      [e.target.value]: e.target.checked,
    });
  };

  const priceFilter = (e) => {
    setFilters({
      ...filters,
      price: e.target.value,
    });
  };

  useEffect(() => {
    let items = [...state],
      newArr = [],
      returnArr = [];

    for (let val in filters) {
      if (filters[val].length > 5) {
        switch (filters[val]) {
          case "lower than $20":
            items.map((item) => (item.price < 20 ? newArr.push(item) : null));
            break;
          case "$20 - $100":
            items.map((item) =>
              item.price > 19 && item.price < 101 ? newArr.push(item) : null
            );
            break;
          case "$100 - $200":
            items.map((item) =>
              item.price > 99 && item.price < 201 ? newArr.push(item) : null
            );
            break;
          case "more than $200":
            items.map((item) => (item.price > 200 ? newArr.push(item) : null));
            break;
          default:
        }
      }

      if (!returnArr.length) returnArr = [...newArr];

      if (filters[val] && typeof filters[val] === "boolean") {
        if (!newArr.length) newArr = [...state];

        newArr.map((item) =>
          item.category === val ? returnArr.push(item) : null
        );
      }
    }
    setPage(returnArr);
    setPag([...pagination({ arr: returnArr, pageSize: 6, pageNumber: 1 })]);
  }, [
    filters.people,
    filters.premium,
    filters.pets,
    filters.food,
    filters.landmarks,
    filters.cities,
    filters.nature,
    filters.price,
  ]);

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
          <button className="clear" onClick={(e) => showSorting(e)}>
            Clear
          </button>
          <button className="save" onClick={(e) => showSorting(e)}>
            Save
          </button>
        </div>
      </form>
    </aside>
  );
};

export default Products;
