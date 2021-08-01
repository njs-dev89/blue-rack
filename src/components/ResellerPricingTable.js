import React from "react";
import {
  FaCode,
  FaExchangeAlt,
  FaHdd,
  FaMicrochip,
  FaServer,
} from "react-icons/fa";

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
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="table-content blue-border">
              <div className="table-circle blue-bg" data-aos="zoom-in">
                C1
              </div>
              <div className="text-container">
                <ul>
                  <li>
                    <FaMicrochip className="fas fa-microchip"></FaMicrochip>2.4
                    GHz Xenon Processor
                  </li>
                  <li>
                    <FaExchangeAlt className="fas fa-exchange-alt"></FaExchangeAlt>
                    10TB Premium Bandwidth
                  </li>
                  <li>
                    <FaHdd className="fas fa-hdd"></FaHdd>Unlimited SSD Space
                  </li>
                  <li>
                    <FaCode className="fas fa-code"></FaCode>Full Root Admin
                    Access
                  </li>
                  <li>
                    <FaServer className="fas fa-server"></FaServer>Powerful
                    Datacenter Infrastructure
                  </li>
                </ul>
                <div className="price">
                  <h3>$39.99/month</h3>
                </div>
                <a href="#" className="btn btn-large btn-outline outline-dark">
                  Request a free quote
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="table-content ">
              <div
                className="table-circle"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                C2
              </div>
              <div className="text-container">
                <ul>
                  <li>
                    <FaMicrochip className="fas fa-microchip"></FaMicrochip>2.4
                    GHz Xenon Processor
                  </li>
                  <li>
                    <FaExchangeAlt className="fas fa-exchange-alt"></FaExchangeAlt>
                    10TB Premium Bandwidth
                  </li>
                  <li>
                    <FaHdd className="fas fa-hdd"></FaHdd>Unlimited SSD Space
                  </li>
                  <li>
                    <FaCode className="fas fa-code"></FaCode>Full Root Admin
                    Access
                  </li>
                  <li>
                    <FaServer className="fas fa-server"></FaServer>Powerful
                    Datacenter Infrastructure
                  </li>
                </ul>
                <div className="price">
                  <h3>$79.99/month</h3>
                </div>
                <a href="#" className="btn btn-large btn-outline outline-dark">
                  Request a free quote
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="table-content blue-border">
              <div
                className="table-circle blue-bg"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                C3
              </div>
              <div className="text-container">
                <ul>
                  <li>
                    <FaMicrochip className="fas fa-microchip"></FaMicrochip>2.4
                    GHz Xenon Processor
                  </li>
                  <li>
                    <FaExchangeAlt className="fas fa-exchange-alt"></FaExchangeAlt>
                    10TB Premium Bandwidth
                  </li>
                  <li>
                    <FaHdd className="fas fa-hdd"></FaHdd>Unlimited SSD Space
                  </li>
                  <li>
                    <FaCode className="fas fa-code"></FaCode>Full Root Admin
                    Access
                  </li>
                  <li>
                    <FaServer className="fas fa-server"></FaServer>Powerful
                    Datacenter Infrastructure
                  </li>
                </ul>
                <div className="price">
                  <h3>$99.99/month</h3>
                </div>
                <a href="#" className="btn btn-large btn-outline outline-dark">
                  Request a free quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
