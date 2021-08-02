import React from "react";

export default function ContactPageHeader({ page }) {
  return (
    <div className="default-header contact-page">
      <div className="custom-width">
        <div className="row">
          <div className="col-sm-7">
            <div className="header-text">
              {page === "about" ? (
                <h2>10 years experience on website hosting</h2>
              ) : (
                <h2>Contact our technical team</h2>
              )}
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some but the
                majority have suffered alteration in some form
              </p>
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
