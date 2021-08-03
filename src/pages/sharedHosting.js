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
      <HostingPageHeader page="shared" />
      <PricingTable />
      <SharedLayoutRight />
      <FeaturesStyleThree />
      <Faq />
      <CallToAction />
    </Layout>
  );
}
