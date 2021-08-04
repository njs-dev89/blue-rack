import React from "react";
import { Link } from "gatsby";

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
                  <li>200GB NVME SSD Storage</li>
                  <li>50 Control Panels</li>
                  <li>WHMCS Licence (Global)</li>
                  <li>Support Via Ticket and Live Chat</li>
                  <li>Realtime Access</li>
                  <li>Unlimited Email accounts</li>
                  <li>Free Native Apps</li>
                  <li>Linux server</li>
                  <li>Licenced Softwares</li>
                </ul>
                <div className="price">
                  <h3>$30/month</h3>
                </div>
                <Link to="/" className="btn btn-large btn-outline outline-dark">
                  Request a free quote
                </Link>
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
                  <li>400GB NVME SSD Storage</li>
                  <li>200 Control Panels</li>
                  <li>WHMCS Licence (Global)</li>
                  <li>Support Via Ticket and Live Chat</li>
                  <li>Realtime Access</li>
                  <li>Unlimited Email accounts</li>
                  <li>Free Native Apps</li>
                  <li>Linux server</li>
                  <li>Licenced Softwares</li>
                </ul>
                <div className="price">
                  <h3>$42/month</h3>
                </div>
                <Link to="/" className="btn btn-large btn-outline outline-dark">
                  Request a free quote
                </Link>
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
                  <li>500GB NVME SSD Storage</li>
                  <li>300 Control Panels</li>
                  <li>WHMCS Licence (Global)</li>
                  <li>Support Via Ticket and Live Chat</li>
                  <li>Realtime Access</li>
                  <li>Unlimited Email accounts</li>
                  <li>Free Native Apps</li>
                  <li>Linux server</li>
                  <li>Licenced Softwares</li>
                </ul>
                <div className="price">
                  <h3>$48/month</h3>
                </div>
                <Link to="/" className="btn btn-large btn-outline outline-dark">
                  Request a free quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
