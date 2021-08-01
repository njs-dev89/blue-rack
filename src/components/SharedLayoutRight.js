import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function SharedLayoutRight() {
  return (
    <div className="layout-text right-layout gray-layout padding-bottom50 padding-top50">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <StaticImage
              src="../images/png-images/layouts1.png"
              className="img-responsive img-shadow"
              alt=""
              //   data-aos="fade-right"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="text-container" /*data-aos="fade-up"*/>
              <h3>Fully Managed and Unlimited Premium Support</h3>
              <div className="text-content">
                <i className="far fa-check-circle pull-left"></i>
                <div className="text">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when t is a
                    long established fact that a reader will be distracted
                    established fact that a reader will be distracted.
                  </p>
                </div>
              </div>
              <div className="text-content">
                <i className="far fa-check-circle pull-left"></i>
                <div className="text">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when t is a
                    long established fact that a reader will be distracted.
                  </p>
                </div>
              </div>
              <div className="buttons">
                <a href="#" className="btn btn-medium btn-green">
                  Get More Information{" "}
                  <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
