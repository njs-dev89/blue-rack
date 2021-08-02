import React from "react";

export default function ContactForm() {
  return (
    <div className="contact-form padding-top60 padding-bottom60">
      <div className="custom-width">
        <div className="main-title text-center">
          <h2>Contact directly </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which../whmcs
          </p>
        </div>
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <form
              action="https://pleurat.com/bl-demo/default/contact.php"
              method="post"
              id="contact-form"
            >
              <div className="messages"></div>
              <div className="form-group" data-aos="fade-up">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  className="form-control name"
                  placeholder="Your firstname *"
                  required="required"
                  data-error="Firstname is required"
                />
              </div>
              <div
                className="form-group form_left"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your email *"
                  required="required"
                  data-error="Valid email is required"
                />
                <div className="help-block with-errors"></div>
              </div>
              <div
                className="form-group"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <input
                  id="form_web"
                  type="text"
                  name="website"
                  className="form-control"
                  placeholder="Your website *"
                />
              </div>
              <div
                className="form-group"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <textarea
                  id="form_message"
                  name="message"
                  className="form-control"
                  placeholder="Message for me *"
                  rows="8"
                  required="required"
                  data-error="Please,leave us a message../whmcs"
                ></textarea>
                <div className="help-block with-errors"></div>
                <br />
                <button className="btn btn-green btn-large">
                  {" "}
                  <span className="fa fa-envelope"></span> Send your Message{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
