import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function TeamMembers() {
  return (
    <div class="team padding-bottom50 padding-top50">
      <div class="custom-width">
        <div class="main-title text-center">
          <h2>Meet our lovely team</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </p>
        </div>
        <div class="row">
          <div class="col-sm-3">
            <div class="members">
              <StaticImage
                src="../images/about/1.jpg"
                class="img-responsive img-center"
                alt=""
              />
              <div class="member-text">
                <h4>Sonny Clark</h4>
                <h5>General Manager</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error iste natus
                  unde omnis iste natus error is undo emis.
                </p>
                <div class="social-links">
                  <a href="#">
                    <FaFacebookF class="fab fa-facebook-f"></FaFacebookF>
                  </a>
                  <a href="#">
                    <FaGoogle class="fab fa-google"></FaGoogle>
                  </a>
                  <a href="#">
                    <FaLinkedinIn class="fab fa-linkedin-in"></FaLinkedinIn>
                  </a>
                  <a href="#">
                    <FaInstagram class="fab fa-instagram"></FaInstagram>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="members">
              <StaticImage
                src="../images/about/2.jpg"
                class="img-responsive img-center"
                alt=""
              />
              <div class="member-text">
                <h4>John Mark</h4>
                <h5>General Manager</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error iste natus
                  unde omnis iste natus error is undo emis.
                </p>
                <div class="social-links">
                  <a href="#">
                    <FaFacebookF class="fab fa-facebook-f"></FaFacebookF>
                  </a>
                  <a href="#">
                    <FaGoogle class="fab fa-google"></FaGoogle>
                  </a>
                  <a href="#">
                    <FaLinkedinIn class="fab fa-linkedin-in"></FaLinkedinIn>
                  </a>
                  <a href="#">
                    <FaInstagram class="fab fa-instagram"></FaInstagram>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="members">
              <StaticImage
                src="../images/about/3.jpg"
                class="img-responsive img-center"
                alt=""
              />
              <div class="member-text">
                <h4>Claudio Suro</h4>
                <h5>General Manager</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error iste natus
                  unde omnis iste natus error is undo emis.
                </p>
                <div class="social-links">
                  <a href="#">
                    <FaFacebookF class="fab fa-facebook-f"></FaFacebookF>
                  </a>
                  <a href="#">
                    <FaGoogle class="fab fa-google"></FaGoogle>
                  </a>
                  <a href="#">
                    <FaLinkedinIn class="fab fa-linkedin-in"></FaLinkedinIn>
                  </a>
                  <a href="#">
                    <FaInstagram class="fab fa-instagram"></FaInstagram>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="members">
              <StaticImage
                src="../images/about/4.jpg"
                class="img-responsive img-center"
                alt=""
              />
              <div class="member-text">
                <h4>James Frank</h4>
                <h5>General Manager</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error iste natus
                  unde omnis iste natus error is undo emis.
                </p>
                <div class="social-links">
                  <a href="#">
                    <FaFacebookF class="fab fa-facebook-f"></FaFacebookF>
                  </a>
                  <a href="#">
                    <FaGoogle class="fab fa-google"></FaGoogle>
                  </a>
                  <a href="#">
                    <FaLinkedinIn class="fab fa-linkedin-in"></FaLinkedinIn>
                  </a>
                  <a href="#">
                    <FaInstagram class="fab fa-instagram"></FaInstagram>
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
