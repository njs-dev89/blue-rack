import React from "react";
import BoxesStyleOne from "../components/BoxesStyleOne";
import CallToAction from "../components/CallToAction";
import ColorfulSection from "../components/ColorfulSection";
import HostingPageHeader from "../components/HostingPageHeader";
import Layout from "../components/Layout";
import LayoutTextLeft from "../components/LayoutTextLeft";
import LayoutTextRight from "../components/LayoutTextRight";
import ResellerPricingTable from "../components/ResellerPricingTable";

export default function resellerHosting() {
  return (
    <Layout>
      <HostingPageHeader
        page="reseller"
        title="Start your project with our shared hosting plans"
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
        oldPrice="3.99/monthly"
        newPrice="2.99/monthly"
        link="/"
      />
      <ResellerPricingTable />
      <ColorfulSection />
      <LayoutTextLeft />
      <LayoutTextRight />
      <BoxesStyleOne />
      <CallToAction />
    </Layout>
  );
}
