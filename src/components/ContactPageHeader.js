import { Link } from "gatsby";
import React from "react";

export default function ContactPageHeader({ page, title, description, link }) {
  return (
    <div
      className={`default-header ${
        page === "contact" ? "contact-page" : "about-page"
      }`}
    >
      <div className="custom-width">
        <div className="row">
          <div className="col-sm-7">
            <div className="header-text">
              <h2>{title}</h2>
              <p>{description}</p>
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
