import React from "react";
import ContactForm from "../components/ContactForm";
import ContactPageHeader from "../components/ContactPageHeader";
import Layout from "../components/Layout";
import CallToActionTwo from "../components/CallToActionTwo";

export default function contact() {
  return (
    <Layout>
      <ContactPageHeader page="contact" />
      <ContactForm />
      <CallToActionTwo />
    </Layout>
  );
}
