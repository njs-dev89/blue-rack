import { Link } from "gatsby";
import React from "react";
import { FaCloud, FaPlus, FaServer } from "react-icons/fa";

export default function BoxStyles() {
  return (
    <div className="boxes-two padding-bottom50 padding-top50">
      <div className="container">
        <div className="main-title text-center">
          <h2>The most powerful website hosting</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="box-container">
              <div className="box-title">
                <h4>
                  <FaPlus
                    className="fa fa-plus"
                    style={{ color: "#14d468" }}
                  ></FaPlus>{" "}
                  Wordpress Hosting
                </h4>
              </div>
              <ul>
                <li>
                  <FaPlus className="fa-list" />
                  Fully Managed Servers
                </li>
                <li>
                  <FaPlus className="fa-list" />
                  Unlimited Space and Bandwidth
                </li>
                <li>
                  <FaPlus className="fa-list" />
                  Powerful and new servers
                </li>
                <li>
                  <FaPlus className="fa-list" />
                  Based on SSD Space
                </li>
                <li>
                  <FaPlus className="fa-list" />
                  Unlimited Free 24/7 Support
                </li>
              </ul>
              <div className="buttons">
                <Link to="/" className="btn btn-green btn-small">
                  See offers <i className="fa fa-long-arrow-alt-right"></i>
                </Link>
                <Link to="/" className="btn btn-outline outline-dark btn-small">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box-container">
              <div className="box-title">
                <h4>
                  <FaCloud
                    className="fa fa-cloud"
                    style={{ color: "#14d468" }}
                  ></FaCloud>{" "}
                  Cloud Computing
                </h4>
              </div>
              <ul>
                <li>
                  <FaPlus className="fa-list" />
                  Fully Managed Servers
                </li>
                <li>
                  <FaPlus className="fa-list" />
                  Unlimited Space and Bandwidth
                </li>
                <li>
                  <FaPlus className="fa-list" />
                  Powerful and new servers
                </li>
                <li>
                  <FaPlus className="fa-list" />
                  Based on SSD Space
                </li>
                <li>
                  <FaPlus className="fa-list" />
                  Unlimited Free 24/7 Support
                </li>
              </ul>
              <div className="buttons">
                <Link to="/" className="btn btn-green btn-small">
                  See offers
                </Link>
                <Link to="/" className="btn btn-outline outline-dark btn-small">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box-container">
              <div className="box-title">
                <h4>
                  <FaServer style={{ color: "#14d468" }}></FaServer> Dedicated
                  Servers
                </h4>
              </div>
              <ul>
                <li>
                  <FaPlus className="fa-list" />
                  Fully Managed Servers
                </li>
                <li>
                  <FaPlus className="fa-list" />
                  Unlimited Space and Bandwidth
                </li>
                <li>
                  <FaPlus className="fa-list" />
                  Powerful and new servers
                </li>
                <li>
                  <FaPlus className="fa-list" />
                  Based on SSD Space
                </li>
                <li>
                  <FaPlus className="fa-list" />
                  Unlimited Free 24/7 Support
                </li>
              </ul>
              <div className="buttons">
                <Link to="/" className="btn btn-green btn-small">
                  See offers <i className="fa fa-long-arrow-alt-right"></i>
                </Link>
                <Link to="/" className="btn btn-outline outline-dark btn-small">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
