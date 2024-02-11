import React from "react";
import x from "./avataaars.svg";

export default function Home() {
  return (
    <div className="bg-success p-5 mt-5 pt-5">
      <div className="container  ">
        <div className="row">
          <div
            className=" col-md-6 ms-auto translate-middle-x text-center
          "
          >
            <img src={x} alt="sd" className="w-75" />

            <h1>START FRAMEWORK</h1>

            <i class="fa-solid fa-star bg-success r "></i>

            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </div>
  );
}
