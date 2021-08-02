import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Carousel } from "react-bootstrap";

export default function TestimonialSlider() {
  return (
    <section className="testimonials white-bg" id="carousel">
      <div className="custom-width">
        <div className="row">
          <div className="col-md-12">
            <Carousel
              className="carousel slide"
              id="fade-quote-carousel"
              data-ride="carousel"
              data-interval="8000"
              interval={4000}
            >
              <Carousel.Item className="item">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="text-left">
                      <h2>What our clients are saying?</h2>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                      <div className="buttons">
                        <a
                          href="#"
                          className="btn btn-small btn-outline outline-dark"
                        >
                          Check out all reviews
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="profile-circle">
                      <StaticImage
                        src="../images/other/testimonial1.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <blockquote>
                      <p>
                        <i className="fa quote fa-quote-right fa-sm pull-left"></i>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quidem, veritatis nulla eum laudantium totam
                        tempore optio doloremque laboriosam quas, quos eaque
                        molestias.
                        <i className="fa quote fa-quote-right fa-sm"></i>
                      </p>
                      <small>www.domainname.com</small>
                    </blockquote>
                  </div>
                  <div className="col-sm-4">
                    <div className="profile-circle">
                      <StaticImage
                        src="../images/other/testimonial2.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <blockquote>
                      <p>
                        <i className="fa quote fa-quote-right fa-sm pull-left"></i>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quidem, veritatis nulla eum laudantium totam
                        tempore optio doloremque laboriosam quas, quos eaque
                        molestias.
                        <i className="fa quote fa-quote-right fa-sm"></i>
                      </p>
                      <small>www.domainname.com</small>
                    </blockquote>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="item">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="text-left">
                      <h2>What our clients are saying?</h2>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                      <div className="buttons">
                        <a
                          href="#"
                          className="btn btn-small btn-outline outline-dark"
                        >
                          Check out all reviews
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="profile-circle">
                      <StaticImage
                        src="../images/other/testimonial1.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <blockquote>
                      <p>
                        <i className="fa quote fa-quote-right fa-sm pull-left"></i>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quidem, veritatis nulla eum laudantium totam
                        tempore optio doloremque laboriosam quas, quos eaque
                        molestias.
                        <i className="fa quote fa-quote-right fa-sm"></i>
                      </p>
                      <small>www.domainname.com</small>
                    </blockquote>
                  </div>
                  <div className="col-sm-4">
                    <div className="profile-circle">
                      <StaticImage
                        src="../images/other/testimonial2.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <blockquote>
                      <p>
                        <i className="fa quote fa-quote-right fa-sm pull-left"></i>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quidem, veritatis nulla eum laudantium totam
                        tempore optio doloremque laboriosam quas, quos eaque
                        molestias.
                        <i className="fa quote fa-quote-right fa-sm"></i>
                      </p>
                      <small>www.domainname.com</small>
                    </blockquote>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
