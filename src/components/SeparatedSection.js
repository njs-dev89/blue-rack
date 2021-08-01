import React from "react";
import {
  FaEnvelope,
  FaHdd,
  FaMicrochip,
  FaRocket,
  FaServer,
  FaWordpress,
} from "react-icons/fa";

export default function SeparatedSection() {
  return (
    <div className="dual-section padding-top50 padding-bottom50">
      <div className="custom-width">
        <div className="row">
          <div className="main-title title-white text-center">
            <h2>Transfer your web site to Bluerack</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="col-sm-6">
            <div className="left-content">
              <div className="features">
                <FaServer
                  className="fa fa-server pull-left"
                  data-aos="zoom-in"
                ></FaServer>
                <div className="text">
                  <h4>Fully Managed Business Hosting Servers</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable that a reader will be distrac
                  </p>
                </div>
              </div>
              <div className="features">
                <FaMicrochip
                  className="fa fa-microchip pull-left"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                ></FaMicrochip>
                <div className="text">
                  <h4>Latest Intel Xenon Processors</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable that a reader will be distrac
                  </p>
                </div>
              </div>
              <div className="features">
                <FaHdd
                  className="fa fa-hdd pull-left"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                ></FaHdd>
                <div className="text">
                  <h4>Unlimited space based on SSD Disc</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable that a reader will be distrac
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="right-content">
              <div className="features">
                <FaWordpress
                  className="fab fa-wordpress pull-left"
                  data-aos="zoom-in"
                ></FaWordpress>
                <div className="text">
                  <h4>Fully Managed Wordpress Hosting Servers</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable that a reader will be distrac
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="features">
                <FaRocket
                  className="fa fa-rocket pull-left"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                ></FaRocket>
                <div className="text">
                  <h4>Light Speed Servers and Internet</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable that a reader will be distrac
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="features">
                <FaEnvelope
                  className="fa fa-envelope pull-left"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                ></FaEnvelope>
                <div className="text">
                  <h4>Unlimited Free Premium Support</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable that a reader will be distrac
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
