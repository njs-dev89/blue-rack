import React from "react";
import { FaCloud, FaHdd, FaRocket } from "react-icons/fa";

export default function TripleCols() {
  return (
    <div className="tripple-cols lighter-bg2 padding-bottom40">
      <div className="custom-width">
        <div className="row">
          <div className="col-sm-4 d-flex" data-aos="fadeIn-right">
            <div className="pull-left">
              <FaCloud />
            </div>
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
            className="col-sm-4 d-flex"
            data-aos="fadeIn-right"
            data-aos-delay="100"
          >
            <div className="pull-left ">
              <FaHdd />
            </div>

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
            className="col-sm-4 d-flex"
            data-aos="fadeIn-right"
            data-aos-delay="200"
          >
            <div className="pull-left">
              <FaRocket />
            </div>
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
