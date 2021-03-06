import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function LayoutTextLeft() {
  return (
    <div className="layout-text contact-layout left-layout padding-bottom60 padding-top60">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="text-container" data-aos="fade-up">
              <h3>Unlimited Free Premium Support</h3>
              <div className="text-content">
                <div className="text">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when t is a
                    long established fact that a reader will be distracted
                    established fact that a reader will be distracted long
                    established fact that a reader will be.
                  </p>
                  <h4>
                    <i className="fa fa-phone"></i>Call us free: +1 (33) 5569
                    556
                  </h4>
                </div>
              </div>
            </div>
            <div className="buttons">
              <Link to="/" className="btn btn-small btn-green">
                Read More
              </Link>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 "
            data-aos="fade-left"
          >
            <StaticImage
              src="../images/png-images/laptop.png"
              className="img-responsive"
              loading="lazy"
              placeholder="tracedSVG"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
