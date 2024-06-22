import React from "react";
import { man } from "../assets";

export default function Account() {
  return (
    <div className="account">
      <div className="container">
        <div className="wrapper">
          <div className="left">
            <img src={man} alt="" />
          </div>
          <div className="right">
            <h4>Javid shabin</h4>
            <p>9526223034</p>
            <p><a href="#">Javid@gmail.com</a></p>
          </div>
        </div>
      </div>
      <button>Manage address</button>
      <button>Orders</button>
      <button>Logout</button>
    </div>
  );
}
