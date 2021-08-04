import React from "react";
import HostingPageHeader from "../components/HostingPageHeader";
import PricingTable from "../components/PricingTable";

import Layout from "../components/Layout";
import SharedLayoutRight from "../components/SharedLayoutRight";
import FeaturesStyleThree from "../components/FeaturesStyleThree";
import Faq from "../components/Faq";
import CallToAction from "../components/CallToAction";

export default function HomePage() {
  return (
    <Layout>
      <HostingPageHeader
        page="shared"
        title="Start your project with our shared hosting plans"
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
        oldPrice="3.99/monthly"
        newPrice="2.99/monthly"
        link="/"
      />
      <PricingTable />
      <SharedLayoutRight />
      <FeaturesStyleThree />
      <Faq />
      <CallToAction />
    </Layout>
  );
}
