import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"

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

export default function HelmetSEO({ title, description, openGraph }) {
  const { site } = useStaticQuery(metadata)

  return (
    <GatsbySeo
      title={title || site.siteMetadata.title}
      description={description || site.siteMetadata.description}
      openGraph={openGraph}
    />
  )
}
