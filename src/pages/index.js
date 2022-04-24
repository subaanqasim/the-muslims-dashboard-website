import React from "react"
import HeroSection from "../components/HeroSection"
import Layout from "../components/Layout"
import FeatureSection from "../components/FeatureSection.js"

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeatureSection />
    </Layout>
  )
}
