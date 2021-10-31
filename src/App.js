import "./App.scss";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Products from "./components/Products.js";
import { Context } from "./Context.js";
import { useState } from "react";

function App() {
  const v = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
  let [state, setState] = useState(v);
  let [cartItems, setCartItems] = useState(v);
  let [page, setPage] = useState([...state]);

  function pagination({ arr, pageSize, pageNumber }) {
    const start = pageSize * (pageNumber - 1);
    const end = pageSize * pageNumber;
    return {
      *[Symbol.iterator]() {
        for (let i = start; i < arr.length && i < end; i++) {
          yield arr[i];
        }
      },
    };
  }

  return (
    <Context.Provider
      value={[
        state,
        setState,
        cartItems,
        setCartItems,
        page,
        setPage,
        pagination,
      ]}
    >
      <div className="App">
        <Header />
        <Hero />
        <Products />
      </div>
    </Context.Provider>
  );
}

export default App;
