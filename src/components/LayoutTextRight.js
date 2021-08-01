import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function LayoutTextRight() {
  return (
    <div class="layout-text right-layout padding-bottom50 padding-top50">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <StaticImage
              src="../images/png-images/laptop.png"
              class="img-responsive"
              alt=""
              data-aos="fade-right"
            />
            <StaticImage
              src="../images/png-images/world2.png"
              class="img-absolute"
              alt=""
              data-aos="fade-right"
            />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="text-container" /*data-aos="fade-up"*/>
              <h3>Fully Managed and Powerful Website Hosting</h3>
              <div class="text-content">
                <i class="far fa-check-circle pull-left"></i>
                <div class="text">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when t is a
                    long established fact that a reader will be distracted long
                    fact that.
                  </p>
                </div>
              </div>
              <div class="text-content">
                <i class="far fa-check-circle pull-left"></i>
                <div class="text">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when t is a
                    long established when t is a long established.
                  </p>
                </div>
              </div>
              <div class="buttons">
                <a href="#" class="btn btn-medium btn-green">
                  Get More Information
                  <i class="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
