import React from "react"
import {
  createStyles,
  Header,
  Container,
  Group,
  Paper,
  Transition,
  Button,
  Burger,
} from "@mantine/core"
import { useBooleanToggle } from "@mantine/hooks"
import Logo from "./Logo"
import { Link } from "gatsby"
import { MoonStars } from "tabler-icons-react"
import ColourSchemeToggle from "./ColourSchemeToggle"

const HEADER_HEIGHT = 60

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
    },
  },
}))

const navLinks = [
  // {
  //   link: "/",
  //   label: "Home",
  // },
  // {
  //   link: "/success",
  //   label: "Success",
  // },
  // {
  //   link: "/error",
  //   label: "Error",
  // },
]

export default function Navbar() {
  const [opened, toggleOpened] = useBooleanToggle(false)
  const { classes } = useStyles()

  const items = navLinks.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      activeClassName={classes.linkActive}
      onClick={() => {
        toggleOpened(false)
      }}
    >
      {link.label}
    </Link>
  ))

  return (
    <>
      <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
        <Container className={classes.header}>
          <Link to="/">
            <Logo />
          </Link>
          <Group spacing={5} className={classes.links}>
            {items}
            <ColourSchemeToggle />
          </Group>

          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />

          <Transition
            transition="pop-top-right"
            duration={200}
            mounted={opened}
          >
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>

          <Button radius="sm" component="a" href="/#features" title="Features">
            Become a supporter
          </Button>
        </Container>
      </Header>
    </>
  )
}
