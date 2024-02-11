import React from "react";

export default function Contact() {
  return (
    <div className="p-5 mt-5 text-center ">
      <h1 className="fw-bolder">CONATCT SECTION</h1>
      <div className="p-5 mt-5 ">
        <div className="container  p-5 ">
          <div className="w-75 mx-auto">
            <input
              type="text"
              className="w-100 form-control my-5"
              placeholder="enter-u-name"
            ></input>
            <input
              type="text"
              className="w-100 form-control my-5"
              placeholder="enter-u-name"
            ></input>
            <input
              type="text"
              className="w-100 form-control my-5"
              placeholder="enter-u-name"
            ></input>
          </div>
          <button className="btn btn-info" type="submint">
            send
          </button>
        </div>
      </div>
    </div>
  );
}
