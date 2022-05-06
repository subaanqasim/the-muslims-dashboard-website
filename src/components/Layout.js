import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useHotkeys, useLocalStorage } from "@mantine/hooks"
import { MantineProvider, ColorSchemeProvider } from "@mantine/core"
import "@fontsource/inter/400.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/900.css"

const Layout = ({ children }) => {
  // const [colorScheme, setColorScheme] = useState("light")

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "tmd-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

  useHotkeys([["mod+J", () => toggleColorScheme()]])

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
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

export default Layout
