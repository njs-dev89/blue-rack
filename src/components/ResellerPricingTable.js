import React from "react";
import {
  FaCode,
  FaExchangeAlt,
  FaHdd,
  FaMicrochip,
  FaServer,
} from "react-icons/fa";

function SinglePrice(price, storage, cp) {
  return (
    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div className="table-content blue-border">
        <div className="table-circle blue-bg" data-aos="zoom-in">
          C1
        </div>
        <div className="text-container">
          <ul>
            <li>{storage}GB NVME SSD Storage</li>
            <li>
              <FaExchangeAlt className="fas fa-exchange-alt"></FaExchangeAlt>
              {cp} Control Panels
            </li>
            <li>WHMCS Licence (Global)</li>
            <li>Support Via Ticket and Live Chat</li>
            <li>Realtime Access</li>
            <li>Unlimited Email accounts</li>
            <li>Free Native Apps</li>
            <li>Linux server</li>
            <li>Licenced Softwares</li>
          </ul>
          <div className="price">
            <h3>${price}/month</h3>
          </div>
          <a href="#" className="btn btn-large btn-outline outline-dark">
            Request a free quote
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ResellerPricingTable() {
  return (
    <div className="pricing-tables-light padding-top50 padding-bottom50">
      <div className="container">
        <div className="main-title text-center">
          <h2>Check out our latest web hosting offers</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </p>
        </div>
        <div className="row">
          <SinglePrice price="30" storage="200" cp="50" />
          <SinglePrice price="42" storage="400" cp="200" />
          <SinglePrice price="48" storage="500" cp="300" />
        </div>
      </div>
    </div>
  );
}
