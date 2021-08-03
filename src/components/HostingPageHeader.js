import React from "react";

export default function HostingPageHeader({ page }) {
  return (
    <div
      className={`default-header ${
        page === "reseller"
          ? "reseller"
          : page === "shared"
          ? "shared-page"
          : "vps-page"
      }`}
    >
      <div className="custom-width">
        <div className="row">
          <div className="col-sm-7">
            <div className="header-text">
              <h2>Start your project with our shared hosting plans</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <h4>
                Starting at <span>$3.99/monthly</span>
              </h4>
              <h3>$2.99/monthly</h3>
            </div>
            <div className="buttons">
              <a href="#" className="btn btn-green btn-large">
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
