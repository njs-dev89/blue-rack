import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Carousel } from "react-bootstrap";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Link } from "gatsby";

function SlideLeft({ title, description, link }) {
  return (
    <div className="col-sm-4">
      <div className="text-left">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <Link to={link} className="btn btn-small btn-outline outline-dark">
            Check out all reviews
          </Link>
        </div>
      </div>
    </div>
  );
}

function SlideTestimonial({ children, testimonial, site }) {
  return (
    <div className="col-sm-4">
      <div className="profile-circle">{children}</div>
      <blockquote>
        <p>
          <FaQuoteLeft className="fa quote fa-quote-right fa-sm pull-left"></FaQuoteLeft>
          <br />
          {testimonial}
          <FaQuoteRight className="fa quote fa-quote-right fa-sm"></FaQuoteRight>
        </p>
        <small>{site}</small>
      </blockquote>
    </div>
  );
}

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
                  <SlideLeft
                    title="What our clients are saying?"
                    description="It is a long established fact that a reader will be
                distracted by the readable content of a page when
                looking at its layout."
                    link="/"
                  />
                  <SlideTestimonial
                    testimonial="Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quidem, veritatis nulla eum laudantium totam
                tempore optio doloremque laboriosam quas, quos eaque
                molestias."
                    site="www.demo.com"
                  >
                    <StaticImage
                      src="../images/other/testimonial1.jpg"
                      placeholder="blur"
                      className="img-responsive"
                      alt=""
                    />
                  </SlideTestimonial>

                  <SlideTestimonial
                    testimonial="Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quidem, veritatis nulla eum laudantium totam
                tempore optio doloremque laboriosam quas, quos eaque
                molestias."
                    site="www.demo.com"
                  >
                    <StaticImage
                      src="../images/other/testimonial2.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </SlideTestimonial>
                </div>
              </Carousel.Item>

              <Carousel.Item className="item">
                <div className="row">
                  <SlideLeft
                    title="What our clients are saying?"
                    description="It is a long established fact that a reader will be
                distracted by the readable content of a page when
                looking at its layout."
                    link="/"
                  />
                  <SlideTestimonial
                    testimonial="Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quidem, veritatis nulla eum laudantium totam
                tempore optio doloremque laboriosam quas, quos eaque
                molestias."
                    site="www.demo.com"
                  >
                    <StaticImage
                      src="../images/other/testimonial1.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </SlideTestimonial>

                  <SlideTestimonial
                    testimonial="Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quidem, veritatis nulla eum laudantium totam
                tempore optio doloremque laboriosam quas, quos eaque
                molestias."
                    site="www.demo.com"
                  >
                    <StaticImage
                      src="../images/other/testimonial2.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </SlideTestimonial>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
