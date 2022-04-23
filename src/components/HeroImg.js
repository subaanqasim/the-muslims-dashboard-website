import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { createStyles, useMantineColorScheme } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}))

const coverImgs = graphql`
  {
    allFile {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            formats: WEBP
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`

const HeroImg = () => {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()

  const data = useStaticQuery(coverImgs)
  const coverImgLight = data.allFile.nodes[0].childImageSharp.gatsbyImageData
  const coverImgDark = data.allFile.nodes[1].childImageSharp.gatsbyImageData

  return (
    <GatsbyImage
      image={colorScheme === "dark" ? coverImgDark : coverImgLight}
      alt=""
      className={classes.image}
    />
  )
}

export default HeroImg
