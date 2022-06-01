import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import HeroSection from "../components/HeroSection"
import Layout from "../components/Layout"
import FeatureSection from "../components/FeatureSection.js"
import DonationSection from "../components/DonationSection"
import HelmetSEO from "../components/HelmetSEO"

const query = graphql`
  {
    file(name: { eq: "tmd-8" }) {
      publicURL
      childImageSharp {
        original {
          height
          width
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default function Home() {
  const { file: image, site } = useStaticQuery(query)

  return (
    <Layout>
      <HelmetSEO
        title="The Ultimate Chrome Extension for Muslims"
        description="A new-tab Chrome extension that provides everything a Muslim needs at a glance – accurate prayer times, updated weather forecast, Qur'an and Hadith reminders, plus more in the works."
        openGraph={{
          title: "The Ultimate Chrome Extension for Muslims",
          description:
            "A new-tab Chrome extension that provides everything a Muslim needs at a glance – accurate prayer times, updated weather forecast, Qur'an and Hadith reminders, plus more in the works.",
          type: "website",
          url: site.siteMetadata.siteUrl,
          images: [
            {
              url: `${site.siteMetadata.siteUrl}${image.publicURL}`,
              width: image.childImageSharp.original.width,
              height: image.childImageSharp.original.height,
              alt: "A mockup of The Muslim's Dashboard",
            },
          ],
        }}
      />
      <HeroSection />
      <FeatureSection />
      <DonationSection />
    </Layout>
  )
}
