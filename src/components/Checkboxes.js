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
    radios = [
      "lower than $20",
      "$20 - $100",
      "$100 - $200",
      "more than $200",
      "all prices",
    ];

  let [filters, setFilters] = useState({
    people: false,
    premium: false,
    pets: false,
    food: false,
    landmarks: false,
    cities: false,
    nature: false,
    price: false,
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

  const clearFilters = () => {
    const filterItems = Object.keys(filters);
    const stateObject = { ...filters };
    for (let item of filterItems) {
      stateObject[item] = false;
    }
    setFilters({
      ...stateObject,
    });
  };

  useEffect(() => {
    let items = [...state],
      i = 0,
      newArr = [];

    for (let val in filters) {
      if (typeof filters[val] === "boolean" && filters[val]) {
        const filteredItems = items.filter((item) => item.category === val);
        newArr.push(...filteredItems);
      }

      if (!newArr.length && i === 7) {
        // eslint-disable-next-line no-unused-vars
        let filterCheck = Object.values(filters).some((value) => value === true)
          ? null
          : (newArr = [...state]);
      }

      if (filters[val].length > 5) {
        let filteredItems;
        switch (filters[val]) {
          case "lower than $20":
            filteredItems = newArr.filter((item) => item.price < 20);
            newArr = [...filteredItems];

            break;

          case "$20 - $100":
            filteredItems = newArr.filter(
              (item) => item.price > 19 && item.price < 101
            );
            newArr = [...filteredItems];

            break;

          case "$100 - $200":
            filteredItems = newArr.filter(
              (item) => item.price > 99 && item.price < 201
            );
            newArr = [...filteredItems];

            break;

          case "more than $200":
            filteredItems = newArr.filter((item) => item.price > 200);
            newArr = [...filteredItems];

            break;

          default:
            newArr = [...newArr];
        }
      }

      i++;

      // if (!returnArr.length) returnArr = [...newArr];

      // if (filters[val] && typeof filters[val] === "boolean") {
      //   if (!newArr.length) newArr = [...state];

      //   newArr.map((item) =>
      //     item.category === val ? returnArr.push(item) : null
      //   );
      // }
    }
    setPage(newArr);
    setPag([...pagination({ arr: newArr, pageSize: 6, pageNumber: 1 })]);
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
              className="checkbox"
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
                className="checkbox"
              />
              <span className="checkmark"></span>
            </label>
          ))}
        </div>
        <div className="reset">
          <button
            className="clear"
            onClick={(e) => {
              showSorting(e);
              clearFilters();
            }}
          >
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
