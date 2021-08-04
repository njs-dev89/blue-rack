import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function SingleMember({
  children,
  name,
  designation,
  description,
  fbLink,
  gLink,
  instaLink,
  inLink,
}) {
  return (
    <div className="col-sm-3">
      <div className="members">
        {children}
        <div className="member-text">
          <h4>{name}</h4>
          <h5>{designation}</h5>
          <p>{description}</p>
          <div className="social-links">
            <a href={fbLink}>
              <FaFacebookF className="fab fa-facebook-f"></FaFacebookF>
            </a>
            <a href={gLink}>
              <FaGoogle className="fab fa-google"></FaGoogle>
            </a>
            <a href={inLink}>
              <FaLinkedinIn className="fab fa-linkedin-in"></FaLinkedinIn>
            </a>
            <a href={instaLink}>
              <FaInstagram className="fab fa-instagram"></FaInstagram>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

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
          <SingleMember
            name="Sonny Clark"
            designation="General Manager"
            description="Sed ut perspiciatis unde omnis iste natus error iste natus
          unde omnis iste natus error is undo emis."
            fbLink="/"
            gLink="/"
            inLink="/"
            instaLink="/"
          >
            <StaticImage
              src="../images/about/1.jpg"
              placeholder="blurred"
              className="img-responsive img-center"
              alt=""
            />
          </SingleMember>

          <SingleMember
            name="Sonny Clark"
            designation="General Manager"
            description="Sed ut perspiciatis unde omnis iste natus error iste natus
          unde omnis iste natus error is undo emis."
            fbLink="/"
            gLink="/"
            inLink="/"
            instaLink="/"
          >
            <StaticImage
              src="../images/about/2.jpg"
              placeholder="blurred"
              className="img-responsive img-center"
              alt=""
            />
          </SingleMember>

          <SingleMember
            name="Sonny Clark"
            designation="General Manager"
            description="Sed ut perspiciatis unde omnis iste natus error iste natus
          unde omnis iste natus error is undo emis."
            fbLink="/"
            gLink="/"
            inLink="/"
            instaLink="/"
          >
            <StaticImage
              src="../images/about/3.jpg"
              placeholder="blurred"
              className="img-responsive img-center"
              alt=""
            />
          </SingleMember>

          <SingleMember
            name="Sonny Clark"
            designation="General Manager"
            description="Sed ut perspiciatis unde omnis iste natus error iste natus
          unde omnis iste natus error is undo emis."
            fbLink="/"
            gLink="/"
            inLink="/"
            instaLink="/"
          >
            <StaticImage
              src="../images/about/4.jpg"
              placeholder="blurred"
              className="img-responsive img-center"
              alt=""
            />
          </SingleMember>
        </div>
      </div>
    </div>
  );
}
