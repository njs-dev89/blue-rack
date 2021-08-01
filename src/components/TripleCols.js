import React from "react";

export default function TripleCols() {
  return (
    <div className="tripple-cols lighter-bg2 padding-bottom40">
      <div className="custom-width">
        <div className="row">
          <div className="col-sm-4" /*data-aos="fade-right"*/>
            <i className="fa fa-cloud pull-left"></i>
            <div className="text">
              <h4>Fully Managed Services</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some for have
                suffered.
              </p>
            </div>
          </div>
          <div
            className="col-sm-4" /*data-aos="fade-right" data-aos-delay="100"*/
          >
            <i className="fa fa-hdd pull-left"></i>
            <div className="text">
              <h4>Based on SSD Space</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some for have
                suffered.
              </p>
            </div>
          </div>
          <div
            className="col-sm-4" /*data-aos="fade-right" data-aos-delay="200"*/
          >
            <i className="fa fa-rocket pull-left"></i>
            <div className="text">
              <h4>Varnish Cache Enabled</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some for have
                suffered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
