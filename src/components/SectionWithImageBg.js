import React from "react";
import { Link } from "gatsby";

export default function SectionWithImageBg() {
  return (
    <div className="img-section imgs2 custom-width margin-bottom50">
      <div className="row">
        <div className="col-sm-8">
          <div className="text">
            <h2>Need help? Contact our award-winning support team</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem ed
              ut perspiciatis unde omnis iste natus error sit voluptatem ed ut
              perspiciatis unde omnis iste natus error sit voluptatem fact that
              a reader will be distracted by the readable that a reader will be
              distrac
            </p>
            <Link to="/" className="btn btn-outline btn-medium">
              {" "}
              Contact us now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
