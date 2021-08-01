import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

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
                        <FaPlus
                          className="fa fa-plus"
                          style={{
                            color: "#14d468",
                            marginRight: "2px",
                            paddingTop: "3px",
                          }}
                        ></FaPlus>{" "}
                        It is a long established fact that a reader
                      </li>
                      <li>
                        <FaPlus
                          className="fa fa-plus"
                          style={{
                            color: "#14d468",
                            marginRight: "2px",
                            paddingTop: "3px",
                          }}
                        ></FaPlus>{" "}
                        Many desktop publishing packages web page
                      </li>
                      <li>
                        <FaPlus
                          className="fa fa-plus"
                          style={{
                            color: "#14d468",
                            marginRight: "2px",
                            paddingTop: "3px",
                          }}
                        ></FaPlus>{" "}
                        Various versions have evolved over the
                      </li>
                      <li>
                        <FaPlus
                          className="fa fa-plus"
                          style={{
                            color: "#14d468",
                            marginRight: "2px",
                            paddingTop: "3px",
                          }}
                        ></FaPlus>{" "}
                        It is a long established fact that a reader
                      </li>
                      <li>
                        <FaPlus
                          className="fa fa-plus"
                          style={{
                            color: "#14d468",
                            marginRight: "2px",
                            paddingTop: "3px",
                          }}
                        ></FaPlus>{" "}
                        All the Lorem Ipsum generators on the Internet
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <h4>Cloud Hosting Features</h4>
                    <ul>
                      <li>
                        <FaTimes
                          className="fa fa-times"
                          style={{
                            color: "#14d468",
                            marginRight: "2px",
                            paddingTop: "3px",
                          }}
                        ></FaTimes>{" "}
                        Contrary to popular belief lorem Ipsum is not
                      </li>
                      <li>
                        <FaTimes
                          className="fa fa-times"
                          style={{
                            color: "#14d468",
                            marginRight: "2px",
                            paddingTop: "3px",
                          }}
                        ></FaTimes>{" "}
                        All the Lorem Ipsum generators on the Internet
                      </li>
                      <li>
                        <FaTimes
                          className="fa fa-times"
                          style={{
                            color: "#14d468",
                            marginRight: "2px",
                            paddingTop: "3px",
                          }}
                        ></FaTimes>{" "}
                        Many desktop publishing packages and error
                      </li>
                      <li>
                        <FaTimes
                          className="fa fa-times"
                          style={{
                            color: "#14d468",
                            marginRight: "2px",
                            paddingTop: "3px",
                          }}
                        ></FaTimes>{" "}
                        Many desktop publishing packages web page
                      </li>
                      <li>
                        <FaTimes
                          className="fa fa-times"
                          style={{
                            color: "#14d468",
                            marginRight: "2px",
                            paddingTop: "3px",
                          }}
                        ></FaTimes>{" "}
                        All the Lorem Ipsum generators on the Internet
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
