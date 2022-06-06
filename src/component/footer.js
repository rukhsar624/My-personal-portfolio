import React from "react";
import "./footer-style.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex justify-content-center bg-danger">
                <div className="round">

                </div>

              </div>
            </div>
            <div className="col-lg-6 bg-warning">
              <h5>Made with love by Blazethemez</h5>
              <p>2020 BLAZETHEMEZ - ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer