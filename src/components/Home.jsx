import axios from "axios";
import "../stylesheets/home.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Home = () => {
  const Dispatch = useDispatch();
  const [data, setData] = useState([]);
//   const index = useSelector((state) => state.cart.length);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <div
      className=" d-flex flex-wrap gap-3 justify-content-center my-3"
      id="homeMain"
    >
      {data.map((items) => {
        return (
          <div
            key={items.id}
            id="cart"
            className="border text-center shadow rounded"
          >
            <img
              id="imgcart"
              className=" py-2"
              src={items.image}
              alt={items.category}
            />
            <div className=" fw-bold">{items.category}</div>
            <div className=" d-flex justify-content-around my-1 align-content-center">
              <h4>&#8377;{items.price}</h4>
              <div className=" d-flex justify-content-center flex-column">
                <h6>{items.rating.rate}</h6>
                <h6>&#9734;&#9734;&#9734;&#9734;&#9734;</h6>
              </div>
            </div>
            <button
              onClick={() => {
                Dispatch(add(items));
              }}
              className=" btn btn-outline-success px-5 mx-2 my-3"
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
