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
      <HostingPageHeader page="reseller" />
      <ResellerPricingTable />
      <ColorfulSection />
      <LayoutTextLeft />
      <LayoutTextRight />
      <BoxesStyleOne />
      <CallToAction />
    </Layout>
  );
}
