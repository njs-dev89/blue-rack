import React from "react";
import ContactForm from "../components/ContactForm";
import ContactPageHeader from "../components/ContactPageHeader";
import Layout from "../components/Layout";
import CallToActionTwo from "../components/CallToActionTwo";

export default function contact() {
  return (
    <Layout>
      <ContactPageHeader
        page="contact"
        title="10 years experience on website hosting!!!"
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some but the majority have suffered alteration in some form"
        link="/"
      />
      <ContactForm />
      <CallToActionTwo />
    </Layout>
  );
}
