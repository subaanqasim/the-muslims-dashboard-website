import React, { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useHotkeys } from "@mantine/hooks"
import { MantineProvider, ColorSchemeProvider } from "@mantine/core"
// import "@fontsource/inter/variable-full.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/900.css"

const Layout = ({ children }) => {
  const [colorScheme, setColorScheme] = useState("light")
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

  useHotkeys([["mod+J", () => toggleColorScheme()]])

  const navLinks = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/success",
      label: "Success",
    },
    {
      link: "/error",
      label: "Error",
    },
  ]

  const myTheme = {
    colorScheme,
    primaryColor: "cyan",
    defaultRadius: "sm",
    loader: "oval",
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    headings: {
      fontFamily:
        "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    },
  }

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={myTheme} withNormalizeCSS withGlobalStyles>
          <Navbar links={navLinks} />
          {children}
          <Footer />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

export default Layout
