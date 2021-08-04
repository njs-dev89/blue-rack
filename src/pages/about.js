import React from "react";
import TestimonialSlider from "../components/TestimonialSlider";
import ContactPageHeader from "../components/ContactPageHeader";
import Layout from "../components/Layout";
import CallToActionTwo from "../components/CallToActionTwo";
import TeamMembers from "../components/TeamMembers";
import SectionWithImageBg from "../components/SectionWithImageBg";
import FeaturesStyleFour from "../components/FeaturesStyleFour";

export default function contact() {
  return (
    <Layout>
      <ContactPageHeader
        page="about"
        title="10 years experience on website hosting"
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some but the majority have suffered alteration in some form"
      />
      <TeamMembers />
      <SectionWithImageBg />
      <FeaturesStyleFour />
      <TestimonialSlider />
      <CallToActionTwo />
    </Layout>
  );
}
