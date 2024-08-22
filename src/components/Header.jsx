import React from "react";
import "../stylesheets/header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const items = useSelector((state) => state.cart.length);
  return (
    <header className=" border d-flex justify-content-between px-3 align-items-center rounded position-sticky top-0">
      <div className=" fw-bolder fs-4 text-danger">Redux-Toolkit</div>
      <div>
        <ul className=" list-unstyled d-flex justify-content-between gap-3 align-items-center">
          <li className=" fw-bold fs-5">
            <Link to="/" className=" fw-bold fs-5 text-black btn">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className=" fw-bold fs-5 text-black btn">&#128722;Cart:{items}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
