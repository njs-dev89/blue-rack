import React from "react";

export default function ColorfulSection() {
  return (
    <div className="colorful-section padding-bottom50 padding-top50">
      <div className="custom-width">
        <div className="main-title title-white text-center">
          <h2>Check out our latest web hosting offers</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="text-content">
              <i className="fab fa-aws pull-left" data-aos="zoom-in"></i>
              <div className="text">
                <h4>Optimized for AWS Connection</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veritatis nulla eum laudantium.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="text-content">
              <i
                className="fa fa-bullhorn pull-left"
                data-aos="zoom-in"
                data-aos-delay="100"
              ></i>
              <div className="text">
                <h4>Subscribe free for daily offers</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veritatis nulla eum laudantium.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="text-content">
              <i
                className="fa fa-server pull-left"
                data-aos="zoom-in"
                data-aos-delay="200"
              ></i>
              <div className="text">
                <h4>Try free our powerful servers</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veritatis nulla eum laudantium.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="text-content">
              <i className="fa fa-code pull-left" data-aos="zoom-in"></i>
              <div className="text">
                <h4>Unlimited and Full Root Access</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veritatis nulla eum laudantium.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="text-content">
              <i
                className="fab fa-wordpress pull-left"
                data-aos="zoom-in"
                data-aos-delay="100"
              ></i>
              <div className="text">
                <h4>Powerful wordpress hosting</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, veritatis nulla eum laudantium.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="text-content">
              <i
                className="fa fa-gem pull-left"
                data-aos="zoom-in"
                data-aos-delay="200"
              ></i>
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
