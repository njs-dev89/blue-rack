import React from "react";

export default function CallToAction() {
  return (
    <div className="call-to-action cta-green">
      <div className="custom-width">
        <div className="row">
          <div className="col-sm-6">
            <h3>Datacenter with Green Power Partnership</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
          <div className="col-sm-6">
            <div className="buttons">
              <a href="#" className="btn btn-outline btn-large">
                Get more information{" "}
                <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
