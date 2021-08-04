import { Link } from "gatsby";
import React from "react";

export default function UnderFooter() {
  return (
    <>
      <div className="under-footer">
        <div className="custom-width">
          <div className="row">
            <div className="col-sm-8">
              <div className="under_footer_links">
                <Link to="/">About Us</Link>
                <Link to="/">Sitemap</Link>
                <Link to="/">Careers</Link>
                <Link to="/">Contact Us</Link>
                <Link to="/">Terms of services</Link>
                <Link to="/">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="under-footer2">
        <div className="custom-width">
          <div className="row">
            <p>
              Use of this Site is subject to express terms of use. By using this
              site, you signify that you agree to be bound by these
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
