import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaRegComments,
  FaRegEnvelopeOpen,
  FaTwitter,
} from "react-icons/fa";
import "./HomeHeader.css";
import { Col, Nav, Row, TabContent, TabPane } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { Link } from "gatsby";

const data = {
  tabOne: {
    title: "Powerful Website Hosting",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it a more-or-less normal point of using Lorem Ipsum.",
    price: "19.99/monthly",
    link: "/",
  },
  tabTwo: {
    title: "Powerful Website Hosting",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it a more-or-less normal point of using Lorem Ipsum.",
    price: "11.99/monthly",
    link: "/",
  },
  tabThree: {
    title: "Powerful Website Hosting",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it a more-or-less normal point of using Lorem Ipsum.",
    price: "7.99/monthly",
    link: "/",
  },
};

export default function HomeHeader() {
  return (
    <div className="home-carousel">
      <div className="left-sidebar">
        <div className="contact-links link-style">
          <a>
            <FaPhone className="side-icon" />
          </a>
          <a>
            <FaRegEnvelopeOpen className="side-icon" />
            <div className="notification">+</div>
          </a>
          <a>
            <FaRegComments className="side-icon" />
          </a>
        </div>
        <div className="sidebar-socials link-style">
          <a href="/">
            <FaFacebookF className="side-icon" />
          </a>
          <a to="/">
            <FaInstagram className="side-icon" />
          </a>
          <a href="/">
            <FaTwitter className="side-icon" />
          </a>
          <a href="/">
            <FaLinkedinIn className="side-icon" />
          </a>
        </div>
      </div>
      <div className="custom-width container">
        <Tab.Container defaultActiveKey="first">
          <TabContent className="tab-content">
            <TabPane
              id="wordpress"
              className="tab-pane fadeIn"
              eventKey="first"
            >
              <Row>
                <Col sm={6} className="col-sm-6">
                  <div className="text-container">
                    <div className="home-title animated fadeInLeft">
                      <h2>{data.tabOne.title}</h2>
                      <h4 className="animation-text">
                        Starting at ${data.tabOne.price}
                      </h4>
                      <p>{data.tabOne.description}</p>
                      <div className="buttons">
                        <Link
                          to={data.tabOne.link}
                          className="btn btn-medium btn-green btn-shadow"
                        >
                          Start a free trial
                        </Link>
                        <p>*No Credit Card Rquired</p>
                      </div>
                    </div>
                    <StaticImage
                      src="../../images/png-images/world2.png"
                      placeholder="blurred"
                      layout="fullWidth"
                      objectFit="contain"
                      className="img-absolute"
                      alt=""
                    />
                  </div>
                </Col>
                <Col sm={6} className="col-sm-6">
                  <StaticImage
                    src="../../images/png-images/home-carousel.png"
                    placeholder="blurred"
                    layout="fullWidth"
                    objectFit="contain"
                    className="img-container"
                    imgClassName="img-absolute"
                    alt=""
                  />
                </Col>
              </Row>
            </TabPane>
            <TabPane id="cloud" className="tab-pane FadeIn" eventKey="second">
              <Row>
                <Col sm={6} className="col-sm-6">
                  <div className="text-container">
                    <div className="home-title animated fadeInLeft">
                      <h2>{data.tabTwo.title}</h2>
                      <h4 className="animation-text">
                        Starting at ${data.tabTwo.price}
                      </h4>
                      <p>{data.tabTwo.description}</p>
                      <div className="buttons">
                        <Link
                          to={data.tabTwo.link}
                          className="btn btn-medium btn-green"
                        >
                          Start a free trial
                        </Link>
                        <p>*No Credit Card Rquired</p>
                      </div>
                    </div>
                    <StaticImage
                      src="../../images/png-images/world2.png"
                      placeholder="blurred"
                      objectFit="contain"
                      layout="fullWidth"
                      className="img-absolute"
                      alt=""
                    />
                  </div>
                </Col>
                <Col sm={6} className="col-sm-6">
                  <StaticImage
                    src="../../images/png-images/green-energy.png"
                    placeholder="blurred"
                    layout="fullWidth"
                    objectFit="contain"
                    className="img-container"
                    imgClassName="img-responsive animated fadeInRight"
                    alt=""
                  />
                </Col>
              </Row>
            </TabPane>
            <TabPane
              id="dedicated"
              className="tab-pane fadeIn"
              eventKey="third"
            >
              <Row>
                <Col sm={6} className="col-sm-6">
                  <div className="text-container">
                    <div className="home-title animated fadeInLeft">
                      <h2>{data.tabThree.title}</h2>
                      <h4 className="animation-text">
                        Starting at ${data.tabThree.price}
                      </h4>
                      <p>{data.tabThree.description}</p>
                      <div className="buttons">
                        <Link
                          to={data.tabThree.link}
                          className="btn btn-medium btn-green"
                        >
                          Start a free trial
                        </Link>
                        <p>*No Credit Card Rquired</p>
                      </div>
                    </div>
                    <StaticImage
                      src="../../images/png-images/world2.png"
                      placeholder="blurred"
                      layout="fullWidth"
                      objectFit="contain"
                      className="img-absolute"
                      alt=""
                    />
                  </div>
                </Col>
                <Col sm={6} className="col-sm-6">
                  <StaticImage
                    src="../../images/png-images/server2.png"
                    placeholder="blurred"
                    layout="fullWidth"
                    objectFit="contain"
                    className="img-container animated fadeInRight"
                    imgClassName="img-responsive"
                    alt=""
                  />
                </Col>
              </Row>
            </TabPane>
            <Col sm={12}>
              <Nav className="nav nav-tabs animated fadeInUp tabs-switcher">
                <Nav.Item>
                  <Nav.Link eventKey="first">Wordpress Hosting</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Cloud Computing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" href="#dedicated">
                    Shared Hosting
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </TabContent>
        </Tab.Container>
      </div>
    </div>
  );
}
