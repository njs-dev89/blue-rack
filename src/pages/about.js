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
      <ContactPageHeader page="about" />
      <TeamMembers />
      <SectionWithImageBg />
      <FeaturesStyleFour />
      <TestimonialSlider />
      <CallToActionTwo />
    </Layout>
  );
}
