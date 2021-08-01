import React from "react";
import HostingPageHeader from "../components/HostingPageHeader";
import Layout from "../components/Layout";
import VpsPricing from "../components/VpsPricing";
import FeatureInList from "../components/FeaturesInList";
import LayoutTextLeft from "../components/LayoutTextLeft";
import LayoutTextRight from "../components/LayoutTextRight";
import BoxStyles from "../components/BoxStyles";
import Faq from "../components/Faq";
import CallToActionTwo from "../components/CallToActionTwo";

export default function VpsPage() {
  return (
    <Layout>
      <HostingPageHeader />
      <VpsPricing />
      <FeatureInList />
      <LayoutTextLeft />
      <LayoutTextRight />
      <BoxStyles />
      <Faq />
      <CallToActionTwo />
    </Layout>
  );
}
