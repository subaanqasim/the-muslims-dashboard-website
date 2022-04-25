import React from "react"
import HeroSection from "../components/HeroSection"
import Layout from "../components/Layout"
import FeatureSection from "../components/FeatureSection.js"
import DonationSection from "../components/DonationSection"

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeatureSection />
      <DonationSection />
    </Layout>
  )
}
