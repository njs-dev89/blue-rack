import React from "react";

export default function DomainSearch() {
  return (
    <div className="search-domain">
      <div className="custom-width">
        <div className="row">
          <div className="col-sm-5">
            <div className="text">
              <h4>Search your perfect domain name</h4>
              <p>
                Get your perfect domain name starting from
                <span className="green-color">9.99$</span> for the first year
                and free domain privacy included
              </p>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="domain-input">
              <form action="#">
                <div className="form-group">
                  <input
                    placeholder="Search yout perfect domain name..."
                    className="form-control"
                    id="domain"
                  />
                  <button className="btn btn-domain" type="submit">
                    Search Now
                  </button>
                </div>
                <div className="ltds">
                  <p>.com .net .org .de .xyz .info .online</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
