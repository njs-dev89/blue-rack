import React from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
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
            <FaEnvelope
              className="fa fa-envelope"
              style={{ marginRight: "4px" }}
            ></FaEnvelope>
            yourmeail@domain.com
          </a>
          <a className="topbar-link hidden-xs" href="#">
            <FaPhone
              className="fa fa-phone"
              style={{ marginRight: "4px" }}
            ></FaPhone>{" "}
            +1 (23) 3356 556
          </a>
          <a
            className="topbar-link"
            href="https://pleurat.com/bl-demo/whmcs/clientarea.php"
          >
            <FaUser
              className="fa fa-user"
              style={{ marginRight: "4px" }}
            ></FaUser>{" "}
            My Account
          </a>
        </div>
      </div>
    </div>
  );
}
