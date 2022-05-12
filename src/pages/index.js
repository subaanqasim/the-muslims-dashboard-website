import React from "react"
import HeroSection from "../components/HeroSection"
import Layout from "../components/Layout"
import FeatureSection from "../components/FeatureSection.js"
import DonationSection from "../components/DonationSection"
import Helmet from "../components/HelmetSEO"

export default function Home() {
  return (
    <Layout>
      <Helmet
        title="The Ultimate Chrome Extension for Muslims"
        description="A new-tab Chrome extension that provides everything a Muslim needs at a glance – accurate prayer times, updated weather forecast, Qur'an and Hadith reminders, plus more in the works."
      />
      <HeroSection />
      <FeatureSection />
      <DonationSection />
    </Layout>
  )
}
