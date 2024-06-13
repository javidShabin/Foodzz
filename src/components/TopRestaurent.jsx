import React from "react";
import { clock, discount, rest1, star } from "../assets";

export default function TopRestaurent({resting}) {
    console.log(resting)
  return (
    <>
    <div className="top-rests">
        <div className="container">
            <div className="card">
            <div className="left">
              <img src={rest1} />
            </div>
            <div className="right">
              <h3>Mama restaurent</h3>
              <p>Tasty and Healthy foods</p>
              <div className="icon">
                <span>
                  <img src={star} />
                  <b> 4.5</b>
                </span>
                <span>
                  <img src={clock} />
                  <b> 30 mins</b>
                </span>
              </div>
              <span className="dicImg">
                <img src={discount} />
                <b> **UPTO 40% DICOUND</b>
              </span>
            </div>
            </div>
          </div>
        </div>
    </>
  );
}
