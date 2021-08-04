import { Link } from "gatsby";
import React from "react";
import { FaHdd, FaMicrochip, FaServer } from "react-icons/fa";

export default function ColorfulBoxes() {
  return (
    <div className="colorful-boxes padding-bottom50 padding-top50">
      <div className="custom-width">
        <div className="main-title text-center">
          <h2>With Bluerack offers you can't go wrong</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout will be
            distracted.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="box-container box1">
              <div className="pull-left">
                <FaMicrochip className="fa fa-microchip"></FaMicrochip>
              </div>

              <h4>Multi Core Xenon Processors</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some for have suffe
              </p>
              <div className="buttons">
                <Link to="/" className="btn btn-outline btn-medium">
                  Get more information
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="box-container box2">
              <div className="pull-left">
                <FaServer className="fa fa-server"></FaServer>
              </div>

              <h4>Managed Dedicated Servers</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some for have suffe
              </p>
              <div className="buttons">
                <Link to="/" className="btn btn-outline btn-medium">
                  Get more information
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="box-container box3">
              <div className="pull-left">
                <FaHdd className="fa fa-hdd"></FaHdd>
              </div>

              <h4>Unlimited Space and Bandwidth</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some for have suffe
              </p>
              <div className="buttons">
                <Link to="/" className="btn btn-outline btn-medium">
                  Get more information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
