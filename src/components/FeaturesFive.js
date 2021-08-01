import React from "react";
import {
  FaAws,
  FaBullhorn,
  FaCode,
  FaGem,
  FaServer,
  FaWordpress,
} from "react-icons/fa";

export default function FeaturesFive() {
  return (
    <div className="features-five padding-bottom50 padding-top50 ff-five2">
      <div className="custom-width">
        <div className="main-title title-white text-center">
          <h2>Why you should starting using our services</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="text-content">
              <div className="fab fa-aws pull-left" data-aos="zoom-in">
                <FaAws></FaAws>
              </div>
              <div className="text">
                <h4>Optimized for Speed</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veritatis nulla eum laudantium.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="text-content">
              <div
                className="fab fa-aws pull-left"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <FaBullhorn></FaBullhorn>
              </div>

              <div className="text">
                <h4>Internet Marketing Included</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veritatis nulla eum laudantium.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="text-content">
              <div
                className="fab fa-aws pull-left"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <FaServer></FaServer>
              </div>

              <div className="text">
                <h4>Free Trial For One Month</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veritatis nulla eum laudantium.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="text-content">
              <div className="fab fa-aws pull-left" data-aos="zoom-in">
                <FaCode></FaCode>
              </div>

              <div className="text">
                <h4>Full Root Access</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veritatis nulla eum laudantium.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="text-content">
              <div
                className="fab fa-aws pull-left"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <FaWordpress></FaWordpress>
              </div>

              <div className="text">
                <h4>Powerful wordpress hosting</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veritatis nulla eum laudantium.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="text-content">
              <div
                className="fab fa-aws pull-left"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <FaGem></FaGem>
              </div>

              <div className="text">
                <h4>Premium services and offers</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veritatis nulla eum laudantium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
