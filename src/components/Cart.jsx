import React from "react";
import "../stylesheets/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { remove , clear} from "../store/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const Dispatch = useDispatch();

  const deliveryHandler = ()=>{
    document.querySelector("#delivery").innerHTML = "<h1>Delivered</h1>"
    setTimeout(() => {
        document.querySelector("#delivery").innerHTML =""
    }, 3000);
  }
  return (
    <div className=" my-3">
        <div className=" text-center bg-success" id="delivery"></div>
      {items.map((item) => {
        return (
          <div
            className=" w-100 d-flex justify-content-between px-5 align-items-center border my-2 py-1"
            key={item.id}
          >
            <img id="cartimg" src={item.image} alt="" />
            <div className=" fw-bold text-center"><h3 className=" text-capitalize">{item.category}</h3><h3>&#8377;{item.price}</h3></div>
            <button
              className="btn btn-danger shadow"
              onClick={() => Dispatch(remove(item.id))}
            >
              remove
            </button>
          </div>
        );
      })}

      <div className=" w-100 my-3 d-flex justify-content-between px-3 bg-body-tertiary ">
        <h3>Total Price &#8377; {items.reduce((a,b)=>a+b.price,0)}</h3>
        <button className="btn btn-success my-2" onClick={()=>{
            Dispatch(clear())
            deliveryHandler()
            }}>Payment Now</button>
      </div>
    </div>
  );
};

export default Cart;
