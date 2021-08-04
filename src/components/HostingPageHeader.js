import { Link } from "gatsby";
import React from "react";

export default function HostingPageHeader({
  page,
  title,
  description,
  oldPrice,
  newPrice,
  link,
}) {
  return (
    <div
      className={`default-header ${
        page === "reseller"
          ? "reseller-page"
          : page === "shared"
          ? "shared-page"
          : "vps-page"
      }`}
    >
      <div className="custom-width">
        <div className="row">
          <div className="col-sm-7">
            <div className="header-text">
              <h2>{title}</h2>
              <p>{description}</p>
              <h4>
                Starting at <span>${oldPrice}</span>
              </h4>
              <h3>${newPrice}</h3>
            </div>
            <div className="buttons">
              <Link to={link} className="btn btn-green btn-large">
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
