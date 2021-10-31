import "../assets/scss/products.scss";
import sort from "../assets/images/Vector.svg";
import arrow from "../assets/images/Arrow.svg";
import ProductCard from "./ProductCard.js";
import Checkboxes from "./Checkboxes.js";
import { useState, useContext, useEffect } from "react";
import { Context } from "../Context.js";

const Products = () => {
  let [show, setShow] = useState(false);
  const [, , , , page, setPage, pagination] = useContext(Context);
  let [num, setNum] = useState(1);
  let paginate = [...pagination({ arr: page, pageSize: 6, pageNumber: num })];
  let [pag, setPag] = useState(paginate);
  let numbers = Math.ceil(page.length / 6);
  let [sortValue, setSortValue] = useState(null);

  useEffect(() => {
    let val = [...page];
    if (sortValue === "alphabetically") {
      val = val.sort((a, b) => (b < a ? 1 : -1));
    } else if (sortValue === "price") {
      val = val.sort((a, b) => (b > a ? 1 : -1));
    }
    setPage([...val]);
    setPag(paginate);
  }, [sortValue, num]);

  const showSorting = () => {
    setShow(() => !show);
  };

  return (
    <section className="products">
      <div className="products__header">
        <h5>
          Photography / <span>premium Photos</span>
        </h5>
        <button onClick={showSorting}>
          <img className="sortImg" src={sort} alt="sort icon" />
        </button>
        <div className="sortByPrice">
          <span>
            <img src={arrow} alt="sort by price or alphabet arrow" />
            Sort by
          </span>
          <select onChange={(e) => setSortValue(e.target.value)}>
            <option value="" hidden>
              Select
            </option>
            <option value="price">Price</option>
            <option value="alphabetically">Alphabetically</option>
          </select>
        </div>
      </div>
      <div className="products__list">
        <Checkboxes show={show} showSorting={showSorting} />
        <div className="products-card">
          {pag.map((val, index) => (
            <ProductCard key={index} index={index} val={val} />
          ))}
          <div className="pagination">
            <span onClick={() => (num > 1 ? setNum(--num) : null)}>{"<"}</span>
            {[...Array(numbers)].map((val, i) => (
              <span key={i} className="numbers" onClick={() => setNum(i + 1)}>
                {i + 1}
              </span>
            ))}
            <span onClick={() => (num > 0 ? setNum(++num) : null)}>{">"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
