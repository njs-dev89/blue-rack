import { Link } from "gatsby";
import React from "react";
import {
  FaAngleRight,
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";

export default function DarkFooter() {
  return (
    <footer className="light-footer dark-footer">
      <div className="custom-width">
        <div className="row">
          <div className="col-sm-2">
            <h4>Hosting Services</h4>
            <ul>
              <li>
                <Link to="/">
                  {" "}
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Wordpress Hosting
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Dedicated Servers
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Virtual Privat Server
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Magento Hosting
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Prestashop Hosting
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Baremetal Servers
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  SSD Servers
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h4>Hosting Services</h4>
            <ul>
              <li>
                <Link to="/">
                  {" "}
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Wordpress Hosting
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Dedicated Servers
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Virtual Privat Server
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Magento Hosting
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Prestashop Hosting
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Baremetal Servers
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  SSD Servers
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h4>Main Services</h4>
            <ul>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Domain Reseller
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Reseller Hosting
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Cloud Servers
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Bandwidth and Space
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Website Migration
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h4>Other Services</h4>
            <ul>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Wordpress Hosting
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Dedicated Servers
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Virtual Privat Server
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Magento Hosting
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaAngleRight style={{ color: "#14d468" }} />
                  Prestashop Hosting
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h4>Contact Information</h4>
            <div className="location-info">
              <h5>United States, US</h5>
              <h5>NY, New York 33555</h5>
              <h5>NR 334, Street Example</h5>
              <h5>
                <FaEnvelope className="fa fa-envelope"></FaEnvelope>{" "}
                themekolor@gmail.com
              </h5>
              <h5>
                <FaPhone className="fa fa-phone"></FaPhone> +1 (35) 996 3336
              </h5>
            </div>
          </div>
          <div className="col-sm-2">
            <h4>Social Media</h4>
            <div className="social-media">
              <Link to="/">
                <span>
                  <FaFacebookF className="fab fa-facebook-f"></FaFacebookF>
                </span>
              </Link>
              <Link to="/">
                {" "}
                <span>
                  <FaGoogle className="fab fa-google"></FaGoogle>
                </span>
              </Link>
              <Link to="/">
                {" "}
                <span>
                  <FaLinkedinIn className="fab fa-linkedin-in"></FaLinkedinIn>
                </span>
              </Link>
              <Link to="/">
                {" "}
                <span>
                  <FaInstagram className="fab fa-instagram"></FaInstagram>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="quick-links">
              <div className="qucik-links-title">
                <h4>Quick Links</h4>
              </div>
              <ul>
                <li>
                  <Link to="/">
                    <FaAngleRight style={{ color: "#14d468" }} />
                    Wordpress Hosting
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaAngleRight style={{ color: "#14d468" }} />
                    Dedicated Servers
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaAngleRight style={{ color: "#14d468" }} />
                    Virtual Privat Server
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaAngleRight style={{ color: "#14d468" }} />
                    Cloud Computing
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaAngleRight style={{ color: "#14d468" }} />
                    Magento Hosting
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaAngleRight style={{ color: "#14d468" }} />
                    Prestashop Hosting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
