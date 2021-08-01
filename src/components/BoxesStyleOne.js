import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function BoxesStyleOne() {
  return (
    <div className="boxes-one padding-top50 padding-bottom50">
      <div className="custom-width">
        <div className="main-title text-center">
          <h2>Everything you need to Start a Website</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout will be
            distracted.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="box">
              <StaticImage
                data-aos="zoom-in"
                src="../images/icons/6.png"
                className="img-responsive img-center"
                alt="Hosting"
              />
              <h4>24/7 Livechat Supprt</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <a href="#" className="btn btn-outline outline-dark btn-small">
                Get the deal
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="box">
              <StaticImage
                data-aos="zoom-in"
                data-aos-delay="100"
                src="../images/icons/7.png"
                className="img-responsive img-center"
                alt="Hosting"
              />
              <h4>Send Unlimited Tickets</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <a href="#" className="btn btn-outline outline-dark btn-small">
                Get the deal
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="box">
              <StaticImage
                data-aos="zoom-in"
                data-aos-delay="200"
                src="../images/icons/8.png"
                className="img-responsive img-center"
                alt="Hosting"
              />
              <h4>Free Website Transfer</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <a href="#" className="btn btn-outline outline-dark btn-small">
                Get the deal
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="box">
              <StaticImage
                data-aos="zoom-in"
                data-aos-delay="300"
                src="../images/icons/4.png"
                className="img-responsive img-center"
                alt="Hosting"
              />
              <h4>Fully Managed Servers</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <a href="#" className="btn btn-outline outline-dark btn-small">
                Get the deal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
