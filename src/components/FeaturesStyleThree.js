import { Link } from "gatsby";
import React from "react";
import {
  FaComments,
  FaDatabase,
  FaEnvelope,
  FaExchangeAlt,
  FaHdd,
  FaMicrochip,
  FaRocket,
  FaServer,
} from "react-icons/fa";

export default function FeaturesStyleThree() {
  return (
    <div className="features-six padding-bottom50 padding-top50">
      <div className="custom-width">
        <div className="main-title text-center">
          <h2>Check out our latest web hosting offers</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="text-container">
              <div className="text">
                <div className="img-content">
                  <div className="pull-left">
                    <FaEnvelope className="fa fa-envelope"></FaEnvelope>
                  </div>
                </div>
                <h4>Unlimited Ticket Support</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  t is a long established fact that a reader will be distracted
                  fact.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="text-container">
              <div className="text">
                <div className="img-content">
                  <div className="pull-left">
                    <FaRocket className="fa fa-envelope"></FaRocket>
                  </div>
                </div>
                <h4>Light Speed Servers</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  t is a long established fact that a reader will be distracted
                  fact.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="text-container">
              <div className="text">
                <div className="img-content">
                  <div className="pull-left">
                    <FaComments></FaComments>
                  </div>
                </div>
                <h4>24/7 Livechat Support</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  t is a long established fact that a reader will be distracted
                  fact.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="text-container">
              <div className="text">
                <div className="img-content">
                  <div className="pull-left">
                    <FaMicrochip className="fa fa-envelope"></FaMicrochip>
                  </div>
                </div>
                <h4>Intel Xenon Processors</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  t is a long established fact that a reader will be distracted
                  fact.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="text-container">
              <div className="text">
                <div className="img-content">
                  <div className="pull-left">
                    <FaHdd className="fa fa-envelope"></FaHdd>
                  </div>
                </div>
                <h4>Based on SSD Space</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  t is a long established fact that a reader will be distracted
                  fact.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="text-container">
              <div className="text">
                <div className="img-content">
                  <div className="pull-left">
                    <FaServer className="fa fa-envelope"></FaServer>
                  </div>
                </div>
                <h4>Modern Datacenter</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  t is a long established fact that a reader will be distracted
                  fact.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="text-container">
              <div className="text">
                <div className="img-content">
                  <div className="pull-left">
                    <FaDatabase className="fa fa-envelope"></FaDatabase>
                  </div>
                </div>
                <h4>Unlimited MySQL Databases</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  t is a long established fact that a reader will be distracted
                  fact.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="text-container">
              <div className="text">
                <div className="img-content">
                  <div className="pull-left">
                    <FaExchangeAlt className="fa fa-envelope"></FaExchangeAlt>
                  </div>
                </div>
                <h4>Unlimited Data Transfer</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  t is a long established fact that a reader will be distracted
                  fact.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <Link to="/" className="btn btn-outline outline-dark btn-large">
            Get more information <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
