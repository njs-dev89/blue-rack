import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function FeaturesStyleTwo() {
  return (
    <div className="features-two padding-top50 padding-bottom50">
      <div className="custom-width">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div className="box-shadow">
              <div className="list-features">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="main-title text-left">
                      <h2>Shared Hosting or Cloud Hosting</h2>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4>Shared Hosting Features</h4>
                    <ul>
                      <li>
                        <i className="fa fa-plus"></i> It is a long established
                        fact that a reader
                      </li>
                      <li>
                        <i className="fa fa-plus"></i> Many desktop publishing
                        packages web page
                      </li>
                      <li>
                        <i className="fa fa-plus"></i> Various versions have
                        evolved over the
                      </li>
                      <li>
                        <i className="fa fa-plus"></i> It is a long established
                        fact that a reader
                      </li>
                      <li>
                        <i className="fa fa-plus"></i> All the Lorem Ipsum
                        generators on the Internet
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <h4>Cloud Hosting Features</h4>
                    <ul>
                      <li>
                        <i className="fa fa-times"></i> Contrary to popular
                        belief lorem Ipsum is not
                      </li>
                      <li>
                        <i className="fa fa-times"></i> All the Lorem Ipsum
                        generators on the Internet
                      </li>
                      <li>
                        <i className="fa fa-times"></i> Many desktop publishing
                        packages and error
                      </li>
                      <li>
                        <i className="fa fa-times"></i> Many desktop publishing
                        packages web page
                      </li>
                      <li>
                        <i className="fa fa-times"></i> All the Lorem Ipsum
                        generators on the Internet
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <StaticImage
              src="../images/other/4.jpg"
              className="StaticImage-responsive"
              alt="Wordpress Hosting"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
