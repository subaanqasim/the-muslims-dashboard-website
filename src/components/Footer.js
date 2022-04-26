import React from "react"
import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  Anchor,
} from "@mantine/core"
import { BrandTwitter, BrandInstagram } from "tabler-icons-react"
import Logo from "./Logo"
import { Link } from "gatsby"

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },
  footerLink: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,
    cursor: "pointer",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: theme.fontFamily,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      gap: "1em",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}))

export default function Footer({ data }) {
  const { classes } = useStyles()
  //   const groups = data.map((group) => {
  //     const links = group.links.map((link, index) => (
  //       <Text<'a'>
  //         key={index}
  //         className={classes.link}
  //         component="a"
  //         href={link.link}
  //         onClick={(event) => event.preventDefault()}
  //       >
  //         {link.label}
  //       </Text>
  //     ));

  //     return (
  //       <div className={classes.wrapper} key={group.title}>
  //         <Text className={classes.title}>{group.title}</Text>
  //         {links}
  //       </div>
  //     );
  //   });
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Logo />
          <Text size="xs" color="dimmed" className={classes.description}>
            Everything a Muslim needs at a glance.
          </Text>
        </div>
        <div className={classes.groups}>
          <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg" variant="hover">
              <BrandTwitter size={18} />
            </ActionIcon>
            <ActionIcon size="lg">
              <BrandInstagram size={20} variant="hover" />
            </ActionIcon>
          </Group>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2022 The Muslim's Dashboard. All rights reserved.
        </Text>
        <Group>
          <Link className={classes.footerLink} to="/privacypolicy">
            Privacy Policy
          </Link>
          <Anchor color="dimmed" size="sm" href="mailto:subaan.qasim@gmail.com">
            Contact
          </Anchor>
        </Group>
      </Container>
    </footer>
  )
}
