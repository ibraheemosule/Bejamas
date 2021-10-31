import "./App.scss";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Products from "./components/Products.js";
import { Context } from "./Context.js";
import { useState } from "react";
import { products } from "./dataBase.js";
import axios from "axios";

function App() {
  let [state, setState] = useState(products);
  let [cartItems, setCartItems] = useState([]);
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
        products,
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
