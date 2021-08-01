import React from "react";
import BoxesStyleOne from "../components/BoxesStyleOne";
import BoxStyles from "../components/BoxStyles";
import CallToAction from "../components/CallToAction";
import ColorfulBoxes from "../components/ColorfulBoxes";
import DomainSearch from "../components/DomainSearch";
import FeaturesFive from "../components/FeaturesFive";
import FeaturesInList from "../components/FeaturesInList";
import FeaturesStyleTwo from "../components/FeaturesStyleTwo";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import Layout from "../components/Layout";
import LayoutTextRight from "../components/LayoutTextRight";
import PricingTable from "../components/PricingTable";
import SeparatedSection from "../components/SeparatedSection";
import TabSwitcher from "../components/TabSwitcher";
import TestimonialSlider from "../components/TestimonialSlider";
import TripleCols from "../components/TripleCols";

export default function HomePage() {
  return (
    <Layout>
      <HomeHeader />
      <DomainSearch />
      <PricingTable />
      <SeparatedSection />
      <TabSwitcher />
      <BoxStyles />
      <FeaturesFive />
      <FeaturesStyleTwo />
      <TripleCols />
      <ColorfulBoxes />
      <LayoutTextRight />
      <FeaturesInList />
      <BoxesStyleOne />
      <TestimonialSlider />
      <CallToAction />
    </Layout>
  );
}
