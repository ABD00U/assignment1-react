import React from "react";

export default function About() {
  return (
    <div className="bg-success p-5 text-white">
      <div className="container  mt-5 ">
        <h2 className="pt-5 fw-bolder text-center fs-1 pb-4">
          ABOUT COMPONENT
        </h2>
        <div className=" w-25 h-25 mx-auto text-center mb-3">
          <i class="fa-solid fa-star bg-success rounded-5 p-2 "></i>
        </div>

        <div className="row ms-5 pb-5">
          <div className="  col-md-6">
            <p className="col-11">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className=" col-md-6">
            <p className="col-11">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
