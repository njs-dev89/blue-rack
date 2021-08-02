import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FaEnvelope, FaGem, FaHdd, FaRocket, FaServer } from "react-icons/fa";

export default function FeaturesStyleFour() {
  return (
    <div class="features-four padding-top50 padding-bottom50 text-center">
      <div class="custom-width">
        <div class="row">
          <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div class="content-top">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div class="text-container">
                    <div className="pull-left">
                      <FaRocket class="fa fa-rocket"></FaRocket>
                    </div>

                    <h4>Ultra Fast Servers</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sitter
                      error
                    </p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div class="text-container">
                    <div className="pull-left">
                      <FaServer class="fa fa-rocket"></FaServer>
                    </div>
                    <h4>Powerful Webservers</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sitter
                      error
                    </p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div class="text-container">
                    <div className="pull-left">
                      <FaHdd class="fa fa-rocket"></FaHdd>
                    </div>

                    <h4>Unlimited Web Space</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sitter
                      error
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-bottom">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div class="text-container">
                    <div className="pull-left">
                      <FaEnvelope class="fa fa-rocket"></FaEnvelope>
                    </div>
                    <h4>Unlimited Tickets</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sitter
                      error
                    </p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div class="text-container">
                    <div className="pull-left">
                      <FaGem class="fa fa-rocket"></FaGem>
                    </div>
                    <h4>Premium Support</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sitter
                      error
                    </p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div class="text-container">
                    <div className="pull-left">
                      <FaRocket class="fa fa-rocket"></FaRocket>
                    </div>
                    <h4>Xenon Processors</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sitter
                      error
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <StaticImage
              src="../images/other/person.jpg"
              class="img-responsive"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
