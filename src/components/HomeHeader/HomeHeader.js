import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  FaComments,
  FaEnvelopeOpen,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./HomeHeader.css";
import {
  Col,
  Nav,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import { Tab } from "react-bootstrap";

export default function HomeHeader() {
  return (
    <div className="home-carousel">
      <div className="left-sidebar">
        <div className="contact-links link-style">
          <a /*data-toggle="modal" data-target="#myModal"*/>
            <FaPhone />
          </a>
          <a /*data-toggle="modal" data-target="#myModal"*/>
            <FaEnvelopeOpen />
          </a>
          <a /*data-toggle="modal" data-target="#myModal"*/>
            <FaComments />
            <div className="notification">+</div>
          </a>
        </div>
        <div className="sidebar-socials link-style">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </div>
      {/* <!-- MODAL  --> */}
      {/* <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog modal-sm"> */}
      {/* <!-- Modal content--> */}
      {/* <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">Please feel free to contact us</h4>
            </div>
            <div className="modal-body">
              <div className="modal-contact">
                <i className="fa fa-phone"></i>
                <h4>+1 (33) 456 5566</h4>
              </div>
              <div className="modal-contact">
                <i className="fa fa-envelope"></i>
                <h4>hello@youremail.com</h4>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-blue btn-small"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- end of modal --> */}

      {/* <!-- Left Sidebar ends here --> */}
      <div className="custom-width">
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
                      <h2>Powerful Website Hosting</h2>
                      <h4 className="animation-text">
                        Starting at $19.99/monthly
                      </h4>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it a more-or-less normal point of using Lorem
                        Ipsum.
                      </p>
                      <div className="buttons">
                        <a
                          href="#"
                          className="btn btn-medium btn-green btn-shadow"
                        >
                          Start a free trial
                        </a>
                        <p>*No Credit Card Rquired</p>
                      </div>
                    </div>
                    <StaticImage
                      src="../../images/png-images/world2.png"
                      placeholder="blurred"
                      layout="constrained"
                      objectFit="cover"
                      className="img-absolute"
                      alt=""
                    />
                  </div>
                </Col>
                <Col sm={6} className="col-sm-6">
                  <StaticImage
                    src="../../images/png-images/home-carousel.png"
                    placeholder="blurred"
                    layout="constrained"
                    objectFit="cover"
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
                      <h2>Cloud Computing Services</h2>
                      <h4 className="animation-text">
                        Starting at $11.99/monthly
                      </h4>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it a more-or-less normal point of using Lorem
                        Ipsum.
                      </p>
                      <div className="buttons">
                        <a href="#" className="btn btn-medium btn-green">
                          Start a free trial
                        </a>
                        <p>*No Credit Card Rquired</p>
                      </div>
                    </div>
                    <StaticImage
                      src="../../images/png-images/world2.png"
                      placeholder="blurred"
                      layout="constrained"
                      objectFit="cover"
                      className="img-absolute"
                      alt=""
                    />
                  </div>
                </Col>
                <Col sm={6} className="col-sm-6">
                  <StaticImage
                    src="../../images/png-images/green-energy.png"
                    placeholder="blurred"
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
                      <h2>Business Shared Hosting</h2>
                      <h4 className="animation-text">
                        Starting at $7.99/monthly
                      </h4>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it a more-or-less normal point of using Lorem
                        Ipsum.
                      </p>
                      <div className="buttons">
                        <a href="#" className="btn btn-medium btn-green">
                          Start a free trial
                        </a>
                        <p>*No Credit Card Rquired</p>
                      </div>
                    </div>
                    <StaticImage
                      src="../../images/png-images/world2.png"
                      placeholder="blurred"
                      layout="constrained"
                      objectFit="cover"
                      className="img-absolute"
                      alt=""
                    />
                  </div>
                </Col>
                <Col sm={6} className="col-sm-6">
                  <div className="img-container">
                    <StaticImage
                      src="../../images/png-images/server2.png"
                      placeholder="blurred"
                      className="img-responsive animated fadeInRight"
                      alt=""
                    />
                  </div>
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
