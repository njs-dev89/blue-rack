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
        <div className="main-title title-white text-center">
          <h2>Transfer your web site to Bluerack</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="left-content">
              <div className="features">
                <div className="pull-left" data-aos="zoom-in">
                  <FaServer></FaServer>
                </div>
                <div className="text">
                  <h4>Fully Managed Business Hosting Servers</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable that a reader will be distrac
                  </p>
                </div>
              </div>
              <div className="features">
                <div
                  className="pull-left"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <FaMicrochip></FaMicrochip>
                </div>
                <div className="text">
                  <h4>Latest Intel Xenon Processors</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable that a reader will be distrac
                  </p>
                </div>
              </div>
              <div className="features">
                <div
                  className="pull-left"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <FaHdd></FaHdd>
                </div>
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
                <div className="pull-left" data-aos="zoom-in">
                  <FaWordpress></FaWordpress>
                </div>
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
                <div
                  className="pull-left"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <FaRocket></FaRocket>
                </div>
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
                <div
                  className="pull-left"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <FaEnvelope></FaEnvelope>
                </div>
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
