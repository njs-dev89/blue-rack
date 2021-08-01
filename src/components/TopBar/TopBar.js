import React from "react";
import "./TopBar.css";
export default function TopBar() {
  return (
    <div className="top-bar margin-for-home" id="top-bar">
      <div className="custom-width">
        <div className="left-topbar aligment-for-home">
          <p>Welcome to Bluerack</p>
        </div>
        <div className="right-topbar">
          <a className="topbar-link" href="#">
            <i className="fa fa-envelope"></i>
            yourmeail@domain.com
          </a>
          <a className="topbar-link hidden-xs" href="#">
            <i className="fa fa-phone"></i> +1 (23) 3356 556
          </a>
          <a
            className="topbar-link"
            href="https://pleurat.com/bl-demo/whmcs/clientarea.php"
          >
            <i className="fa fa-user"></i> My Account
          </a>
        </div>
      </div>
    </div>
  );
}
