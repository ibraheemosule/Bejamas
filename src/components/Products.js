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
      val = val.sort((a, b) => (b.name < a.name ? 1 : -1));
    } else if (sortValue === "price") {
      val = val.sort((a, b) => (b.price > a.price ? 1 : -1));
    }
    setPage([...val]);
    setPag(paginate);
  }, [sortValue, num]);

  const showSorting = (e) => {
    e.preventDefault();
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
        <Checkboxes
          show={show}
          showSorting={showSorting}
          pag={pag}
          setPag={setPag}
        />
        <div className="products-card">
          {pag.length ? "" : <h1 className="no-result">NO RESULT FOUND </h1>}
          {pag.map((val, index) => (
            <ProductCard key={index} index={index} val={val} />
          ))}
          {!pag.length ? (
            ""
          ) : (
            <div className="pagination">
              <span
                style={{
                  color: num > 1 ? "black" : "gray",
                }}
                onClick={() => (num > 1 ? setNum(--num) : null)}
              >
                {"<"}
              </span>
              {[...Array(numbers)].map((val, i) => (
                <span
                  key={i}
                  className="numbers"
                  style={{ color: num === i + 1 ? "black" : "gray" }}
                  onClick={() => setNum(i + 1)}
                >
                  {i + 1}
                </span>
              ))}
              <span
                onClick={() =>
                  num > 0 && num < numbers ? setNum(++num) : null
                }
                style={{
                  color: num > 0 && num < numbers ? "black" : "gray",
                }}
              >
                {">"}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
