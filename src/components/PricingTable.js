import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Link } from "gatsby";

function SinglePrice({ price, title, storage, bandwidth, link }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-4">
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
                Fully
                {storage} GB NVme SSD Storage
              </li>
              <li>{bandwidth}GB USA Premium Bandwidth</li>
              <li>Softaculous One Click Installer</li>
              <li>Free SSL Let’s Encrypt</li>
              <li>LiteSpeed Web Server</li>
            </ul>
          </div>
          <div className="buttons">
            <Link to={link} className="btn btn-gray btn-medium">
              {" "}
              Purchase Now
            </Link>
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
              link="/"
            />

            <SinglePrice
              title="GOLD PLAN"
              price="18.00"
              storage="2"
              bandwidth="30"
              link="/"
            />
            <SinglePrice
              title="DIAMOND PLAN"
              price="35.88"
              storage="5"
              bandwidth="60"
              link="/"
            />
            <SinglePrice
              title="PLATINUM PLAN"
              price="59.88"
              storage="10"
              bandwidth="90"
              link="/"
            />
            <SinglePrice
              title="RHODIUM PLAN"
              price="100"
              storage="20"
              bandwidth="130"
              link="/"
            />
            <SinglePrice
              title="TITANIUM PLAN"
              price="170"
              storage="30"
              bandwidth="180"
              link="/"
            />
            <SinglePrice
              title="SPECIAL PLAN"
              price="288"
              storage="50"
              bandwidth="200"
              link="/"
            />
            <SinglePrice
              title="VIP PLAN"
              price="1130"
              storage="200"
              bandwidth="1000"
              link="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
