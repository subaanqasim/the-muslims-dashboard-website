import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const metadata = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`

export default function HelmetSEO({ title, description }) {
  const { site } = useStaticQuery(metadata)
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.title}`}
      description={[{ name: `description`, content: metaDescription }]}
    ></Helmet>
  )
}
