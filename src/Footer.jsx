import React from "react";

export default function Footer() {
  return (
    <div>
      <div className=" bg-dark text-white fw-bolder p-5 ">
        <div className="container">
          <div className=" row text-center">
            <div className="item col-md-4">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="item col-md-4">
              <h3>AROUND THE WEB</h3>
              <div>
                <i class="fa-brands fa-twitter border p-2 rounded-5 fs-4 text-info mx-2"></i>
                <i class="fa-brands fa-facebook-f border p-2 rounded-5 fs-4 text-info mx-2"></i>
                <i class="fa-brands fa-linkedin-in border p-2 rounded-5 fs-4 text-info mx-2"></i>
                <i class="fa-brands fa-dribbble border p-2 rounded-5 fs-4 text-info mx-2"></i>
              </div>
            </div>
            <div className="item col-md-4">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-black text-white text-center p-2">
        <h5>Copyright © Your Website 2021</h5>
      </div>
    </div>
  );
}
