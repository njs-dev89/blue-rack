import React from "react";
import { FaShare } from "react-icons/fa";

export default function VpsPricing() {
  return (
    <div className="dedicated-pricing padding-top50 padding-bottom50">
      <div className="custom-width">
        <div className="main-title text-center">
          <h2>Our latest dedicated server pricing plans</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </p>
        </div>
        <div className="table-responsive">
          <table className="table table-striped custab">
            <thead>
              <tr>
                <th>Processor</th>
                <th>Space</th>
                <th>Bandwidth</th>
                <th>Ram Memory</th>
                <th>Multi CPU</th>
                <th>Price</th>
                <th>Order</th>
              </tr>
            </thead>
            <tr data-aos="fade-up" data-aos-delay="50">
              <td>Intel Xeon X5565</td>
              <td>Unlimited Space</td>
              <td>100GB Bandwidth</td>
              <td>32GB ECC RAM</td>
              <td>Yes</td>
              <td className="price-in-table">79.99$/month</td>
              <td>
                <button
                  className="btn btn-green mt-3"
                  style={{ backgroundColor: "#14d468" }}
                >
                  Order Now<FaShare className="fas fa-share ms-1"></FaShare>
                </button>
              </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="100">
              <td>Intel Xeon X5565</td>
              <td>Unlimited Space</td>
              <td>100GB Bandwidth</td>
              <td>32GB ECC RAM</td>
              <td>Yes</td>
              <td className="price-in-table">99.99$/month</td>
              <td>
                <button
                  className="btn btn-green mt-3"
                  style={{ backgroundColor: "#14d468" }}
                >
                  Order Now<FaShare className="fas fa-share ms-1"></FaShare>
                </button>
              </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="150">
              <td>Intel Xeon X5565</td>
              <td>Unlimited Space</td>
              <td>100GB Bandwidth</td>
              <td>32GB ECC RAM</td>
              <td>No</td>
              <td className="price-in-table">59.99$/month</td>
              <td>
                <button
                  className="btn btn-green mt-3"
                  style={{ backgroundColor: "#14d468" }}
                >
                  Order Now<FaShare className="fas fa-share ms-1"></FaShare>
                </button>
              </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="200">
              <td>Intel Xeon X5565</td>
              <td>Unlimited Space</td>
              <td>100GB Bandwidth</td>
              <td>32GB ECC RAM</td>
              <td>No</td>
              <td className="price-in-table">29.99$/month</td>
              <td>
                <button
                  className="btn btn-green mt-3"
                  style={{ backgroundColor: "#14d468" }}
                >
                  Order Now<FaShare className="fas fa-share ms-1"></FaShare>
                </button>
              </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="250">
              <td>Intel Xeon X5565</td>
              <td>Unlimited Space</td>
              <td>100GB Bandwidth</td>
              <td>32GB ECC RAM</td>
              <td>No</td>
              <td className="price-in-table">49.99$/month</td>
              <td>
                <button
                  className="btn btn-green mt-3"
                  style={{ backgroundColor: "#14d468" }}
                >
                  Order Now<FaShare className="fas fa-share ms-1"></FaShare>
                </button>
              </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="300">
              <td>Intel Xeon X5565</td>
              <td>Unlimited Space</td>
              <td>100GB Bandwidth</td>
              <td>32GB ECC RAM</td>
              <td>Yes</td>
              <td className="price-in-table">89.99$/month</td>
              <td>
                <button
                  className="btn btn-green mt-3"
                  style={{ backgroundColor: "#14d468" }}
                >
                  Order Now<FaShare className="fas fa-share ms-1"></FaShare>
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
