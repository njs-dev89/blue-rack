import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function TeamMembers() {
  return (
    <div className="team padding-bottom50 padding-top50">
      <div className="custom-width">
        <div className="main-title text-center">
          <h2>Meet our lovely team</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="members">
              <StaticImage
                src="../images/about/1.jpg"
                className="img-responsive img-center"
                alt=""
              />
              <div className="member-text">
                <h4>Sonny Clark</h4>
                <h5>General Manager</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error iste natus
                  unde omnis iste natus error is undo emis.
                </p>
                <div className="social-links">
                  <a href="#">
                    <FaFacebookF className="fab fa-facebook-f"></FaFacebookF>
                  </a>
                  <a href="#">
                    <FaGoogle className="fab fa-google"></FaGoogle>
                  </a>
                  <a href="#">
                    <FaLinkedinIn className="fab fa-linkedin-in"></FaLinkedinIn>
                  </a>
                  <a href="#">
                    <FaInstagram className="fab fa-instagram"></FaInstagram>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="members">
              <StaticImage
                src="../images/about/2.jpg"
                className="img-responsive img-center"
                alt=""
              />
              <div className="member-text">
                <h4>John Mark</h4>
                <h5>General Manager</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error iste natus
                  unde omnis iste natus error is undo emis.
                </p>
                <div className="social-links">
                  <a href="#">
                    <FaFacebookF className="fab fa-facebook-f"></FaFacebookF>
                  </a>
                  <a href="#">
                    <FaGoogle className="fab fa-google"></FaGoogle>
                  </a>
                  <a href="#">
                    <FaLinkedinIn className="fab fa-linkedin-in"></FaLinkedinIn>
                  </a>
                  <a href="#">
                    <FaInstagram className="fab fa-instagram"></FaInstagram>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="members">
              <StaticImage
                src="../images/about/3.jpg"
                className="img-responsive img-center"
                alt=""
              />
              <div className="member-text">
                <h4>Claudio Suro</h4>
                <h5>General Manager</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error iste natus
                  unde omnis iste natus error is undo emis.
                </p>
                <div className="social-links">
                  <a href="#">
                    <FaFacebookF className="fab fa-facebook-f"></FaFacebookF>
                  </a>
                  <a href="#">
                    <FaGoogle className="fab fa-google"></FaGoogle>
                  </a>
                  <a href="#">
                    <FaLinkedinIn className="fab fa-linkedin-in"></FaLinkedinIn>
                  </a>
                  <a href="#">
                    <FaInstagram className="fab fa-instagram"></FaInstagram>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="members">
              <StaticImage
                src="../images/about/4.jpg"
                className="img-responsive img-center"
                alt=""
              />
              <div className="member-text">
                <h4>James Frank</h4>
                <h5>General Manager</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error iste natus
                  unde omnis iste natus error is undo emis.
                </p>
                <div className="social-links">
                  <a href="#">
                    <FaFacebookF className="fab fa-facebook-f"></FaFacebookF>
                  </a>
                  <a href="#">
                    <FaGoogle className="fab fa-google"></FaGoogle>
                  </a>
                  <a href="#">
                    <FaLinkedinIn className="fab fa-linkedin-in"></FaLinkedinIn>
                  </a>
                  <a href="#">
                    <FaInstagram className="fab fa-instagram"></FaInstagram>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
