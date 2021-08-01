import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FaCheckCircle, FaLongArrowAltRight } from "react-icons/fa";

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
              data-aos="fadeIn-right"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="text-container" data-aos="fade-up">
              <h3>Fully Managed and Unlimited Premium Support</h3>
              <div className="text-content">
                <div className="pull-left">
                  <FaCheckCircle class="far fa-check-circle pull-left"></FaCheckCircle>
                </div>
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
                <div className="pull-left">
                  <FaCheckCircle class="far fa-check-circle pull-left"></FaCheckCircle>
                </div>
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
                  <FaLongArrowAltRight className="fas fa-long-arrow-alt-right"></FaLongArrowAltRight>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
