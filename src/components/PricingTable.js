import { StaticImage } from "gatsby-plugin-image";
import React from "react";

function SinglePrice({ price, title, storage, bandwidth }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
      <div className="price">{price}$/year</div>
      <div className="table mobile-margin-bottom">
        <div className="table-img" data-aos="fade-up">
          <StaticImage
            placeholder="blurred"
            src="../images/png-images/rocket.png"
            className="img-center img-responsive"
            alt="Wordpress Hosting"
          />
        </div>
        <div className="table-content">
          <h4>{title}</h4>
          <p>Annually</p>
          <div className="table-list">
            <ul>
              <li>
                <i data-aos="zoom-in" className="fa fa-plus"></i> Fully
                {storage} GB NVme SSD Storage
              </li>
              <li>
                <i
                  data-aos="zoom-in"
                  data-aos-delay="50"
                  className="fa fa-plus"
                ></i>
                {bandwidth}GB USA Premium Bandwidth
              </li>
              <li>
                <i
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  className="fa fa-plus"
                ></i>
                Softaculous One Click Installer
              </li>
              <li>
                <i
                  data-aos="zoom-in"
                  data-aos-delay="150"
                  className="fa fa-times"
                ></i>
                Free SSL Let’s Encrypt
              </li>
              <li>
                <i
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="fa fa-times"
                ></i>
                LiteSpeed Web Server
              </li>
            </ul>
          </div>
          <div className="buttons">
            <a href="#" className="btn btn-gray btn-medium">
              {" "}
              Purchase Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingTable() {
  return (
    <div className="pricing-tables padding-top50 padding-bottom50">
      <div className="custom-width">
        <div className="row">
          <div className="main-title text-center">
            <h2>Check out our latest web hosting offers</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout will be
              distracted.
            </p>
          </div>
          <div className="row">
            <SinglePrice
              title="SILVER PLAN"
              price="5.88"
              storage="1"
              bandwidth="20"
            />
            <SinglePrice
              title="SILVER PLAN"
              price="5.88"
              storage="1"
              bandwidth="20"
            />
            <SinglePrice
              title="SILVER PLAN"
              price="5.88"
              storage="1"
              bandwidth="20"
            />
            <SinglePrice
              title="SILVER PLAN"
              price="5.88"
              storage="1"
              bandwidth="20"
            />
            <SinglePrice
              title="SILVER PLAN"
              price="5.88"
              storage="1"
              bandwidth="20"
            />
            <SinglePrice
              title="SILVER PLAN"
              price="5.88"
              storage="1"
              bandwidth="20"
            />
            <SinglePrice
              title="SILVER PLAN"
              price="5.88"
              storage="1"
              bandwidth="20"
            />
            <SinglePrice
              title="SILVER PLAN"
              price="5.88"
              storage="1"
              bandwidth="20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
