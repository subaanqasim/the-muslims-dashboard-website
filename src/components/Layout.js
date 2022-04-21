import React, { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useHotkeys } from "@mantine/hooks"
import {
    MantineProvider,
    ColorSchemeProvider,
    NormalizeCSS,
    Paper,
} from "@mantine/core"

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

    return (
        <>
            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider theme={{ colorScheme }}>
                    <NormalizeCSS />
                    <Paper style={{ minHeight: "100vh", borderRadius: "0" }}>
                        <Navbar links={navLinks} />
                        {children}
                        <Footer />
                    </Paper>
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    )
}

export default Layout
