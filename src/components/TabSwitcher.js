import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Nav, Tab, TabPane } from "react-bootstrap";

export default function TabSwitcher() {
  return (
    <Tab.Container className="tabs padding-bottom30">
      <div className="hosting-tabs">
        <Nav className="nav nav-tabs">
          <Nav.Item className="">
            <div className="arrow-down">
              <div className="arrow-down-inner"></div>
            </div>
            <Nav.Link eventKey="one" href="#home">
              Wordpress Hosting
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="two" href="#menu1">
              Dedicated Servers
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="three" href="#menu2">
              Cloud Computing
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="four" href="#menu3">
              E-commerce Hosting
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="custom-width">
        <div className="row">
          <Tab.Content className="tab-content">
            <Tab.Pane id="home" eventKey="one" className="tab-pane in">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <StaticImage
                    src="../images/png-images/green-energy.png"
                    className="img-responsive animated fadeInLeft"
                    alt="Wordpress Hosting"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="text animated fadeInRight">
                    <div className="tab-title">
                      <h3>World's largest web hosting company</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatemSed ut perspiciatis unde omnis iste natus
                        error sit voluptatem
                      </p>
                    </div>
                    <div className="tab-lists">
                      <div className="host-feature">
                        <i
                          className="fa fa-check pull-left"
                          data-aos="zoom-in"
                        ></i>
                        <div className="text">
                          <h4>Fully Managed with unlimited Bandwidth</h4>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem omnis
                          </p>
                        </div>
                      </div>
                      <div className="host-feature">
                        <i
                          className="fa fa-check pull-left"
                          data-aos="zoom-in"
                          data-aos-delay="100"
                        ></i>
                        <div className="text">
                          <h4>Multi procesors and ram memmories</h4>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem omnis iste natus error sit volupt
                          </p>
                        </div>
                      </div>
                      <div className="host-feature">
                        <i
                          className="fa fa-check pull-left"
                          data-aos="zoom-in"
                          data-aos-delay="200"
                        ></i>
                        <div className="text">
                          <h4>Based on cloud computing and SSD Space</h4>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem omnis iste natus error sit volupt
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane id="menu1" eventKey="two" className="tab-pane">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <StaticImage
                    src="../images/png-images/server.png"
                    className="img-responsive animated fadeInLeft"
                    alt="Wordpress Hosting"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="text animated fadeInRight">
                    <div className="tab-title">
                      <h3>World largest web hosting company</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatemSed ut perspiciatis unde omnis iste natus
                        error sit voluptatem
                      </p>
                    </div>
                    <div className="tab-lists">
                      <div className="host-feature">
                        <i
                          className="fa fa-check pull-left"
                          data-aos="zoom-in"
                        ></i>
                        <div className="text">
                          <h4>Fully Managed with unlimited Bandwidth</h4>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem
                          </p>
                        </div>
                      </div>
                      <div className="host-feature">
                        <i
                          className="fa fa-check pull-left"
                          data-aos="zoom-in"
                          data-aos-delay="100"
                        ></i>
                        <div className="text">
                          <h4>Multi procesors and ram memmories</h4>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem
                          </p>
                        </div>
                      </div>
                      <div className="host-feature">
                        <i
                          className="fa fa-check pull-left"
                          data-aos="zoom-in"
                          data-aos-delay="200"
                        ></i>
                        <div className="text">
                          <h4>Based on cloud computing and SSD Space</h4>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane id="menu2" eventKey="three" className="tab-pane">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <StaticImage
                    src="../images/png-images/green-energy.png"
                    className="img-responsive animated fadeInLeft"
                    alt="Wordpress Hosting"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="text animated fadeInRight">
                    <div className="tab-title">
                      <h3>World largest web hosting company</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatemSed ut perspiciatis unde omnis iste natus
                        error sit voluptatem
                      </p>
                    </div>
                    <div className="tab-lists">
                      <div className="host-feature">
                        <i
                          className="fa fa-check pull-left"
                          data-aos="zoom-in"
                        ></i>
                        <div className="text">
                          <h4>Fully Managed with unlimited Bandwidth</h4>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem
                          </p>
                        </div>
                      </div>
                      <div className="host-feature">
                        <i
                          className="fa fa-check pull-left"
                          data-aos="zoom-in"
                          data-aos-delay="100"
                        ></i>
                        <div className="text">
                          <h4>Multi procesors and ram memmories</h4>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem
                          </p>
                        </div>
                      </div>
                      <div className="host-feature">
                        <i
                          className="fa fa-check pull-left"
                          data-aos="zoom-in"
                          data-aos-delay="200"
                        ></i>
                        <div className="text">
                          <h4>Based on cloud computing and SSD Space</h4>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane id="menu3" eventKey="four" className="tab-pane">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <StaticImage
                    src="../images/png-images/server.png"
                    className="img-responsive animated fadeInLeft"
                    alt="Wordpress Hosting"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="text animated fadeInRight">
                    <div className="tab-title">
                      <h3>World largest web hosting company</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatemSed ut perspiciatis unde omnis iste natus
                        error sit voluptatem
                      </p>
                    </div>
                    <div className="tab-lists">
                      <div className="host-feature">
                        <i
                          className="fa fa-check pull-left"
                          data-aos="zoom-in"
                        ></i>
                        <div className="text">
                          <h4>Fully Managed with unlimited Bandwidth</h4>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem
                          </p>
                        </div>
                      </div>
                      <div className="host-feature">
                        <i
                          className="fa fa-check pull-left"
                          data-aos="zoom-in"
                          data-aos-delay="100"
                        ></i>
                        <div className="text">
                          <h4>Multi procesors and ram memmories</h4>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem
                          </p>
                        </div>
                      </div>
                      <div className="host-feature">
                        <i
                          className="fa fa-check pull-left"
                          data-aos="zoom-in"
                          data-aos-delay="200"
                        ></i>
                        <div className="text">
                          <h4>Based on cloud computing and SSD Space</h4>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </div>
    </Tab.Container>
  );
}
