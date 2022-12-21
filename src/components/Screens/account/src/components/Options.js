import React from 'react'
import { Link } from "react-router-dom";

const Options = () => {
  return (
    <>
      <ul>
        <Link to="/">
            <li>Dashboard</li>
        </Link>
        <Link to="/orders">
            <li>Orders</li>
        </Link>
        <Link to="/downloads">
            <li>Downloads</li>
        </Link>
        <Link to="/addresses">
            <li>Addresses</li>
        </Link>
        <Link to="details">
            <li>Account details</li>
        </Link>
        <Link to="logout">
            <li>Logout</li>
        </Link>
        {/* <li>Dashboard</li>
        <li><a href="">Orders</a></li>
        <li><a href="">Downloads</a></li>
        <li><a href="">Addresses</a></li>
        <li><a href="">Account details</a></li>
        <li><a href="">Logout</a></li> */}
      </ul>
    </>
  );
}

export default Options