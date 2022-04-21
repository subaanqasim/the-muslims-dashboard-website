import React, { useState } from "react"
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Button,
  useMantineColorScheme,
  Text,
  ActionIcon,
} from "@mantine/core"
import { useBooleanToggle } from "@mantine/hooks"
import { MoonStars } from "tabler-icons-react"
import { Link } from "gatsby"
import Logo from "./Logo"

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

export default function Navbar({ links }) {
  const [opened, toggleOpened] = useBooleanToggle(false)
  const [active, setActive] = useState(links[0].link)
  const { classes, cx } = useStyles()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  // const items = links.map((link) => (
  //     <Link
  //         key={link.label}
  //         to={link.link}
  //         className={cx(classes.link, {
  //             [classes.linkActive]: active === link.link,
  //         })}
  //         onClick={() => {
  //             setActive(link.link)
  //             toggleOpened(false)
  //         }}
  //     >
  //         {link.label}
  //     </Link>
  // ))

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <Logo />
        <Group spacing={5} className={classes.links}>
          {/* {items} */}
        </Group>

        {/* <Burger
                    opened={opened}
                    onClick={() => toggleOpened()}
                    className={classes.burger}
                    size="sm"
                /> */}

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {/* {items} */}
            </Paper>
          )}
        </Transition>
        <Button radius="sm">Become a supporter</Button>
      </Container>
    </Header>
  )
}
