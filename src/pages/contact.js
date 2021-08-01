import React from "react";
import BoxesStyleOne from "../components/BoxesStyleOne";
import ContactForm from "../components/ContactForm";
import ContactPageHeader from "../components/ContactPageHeader";
import Layout from "../components/Layout";
import CallToActionTwo from "../components/CallToActionTwo";

export default function contact() {
  return (
    <Layout>
      <ContactPageHeader />
      <BoxesStyleOne />
      <ContactForm />
      <CallToActionTwo />
    </Layout>
  );
}
