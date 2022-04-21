import React from "react"
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core"
import { Check } from "tabler-icons-react"
import logo from "../assets/the-muslims-dashboard-2.jpg"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}))

export default function Home() {
  const { classes } = useStyles()
  return (
    <Layout>
      <div>
        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                The <span className={classes.highlight}>Muslim's</span>{" "}
                Dashboard
              </Title>
              <Text color="dimmed" mt="md">
                A new-tab Chrome extension that provides everything a Muslim
                needs at a glance – accurate prayer times, updated weather
                forecast, Qur'an and Hadith reminders, plus more in the works.
              </Text>

              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <Check size={12} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>Clean and customisable UI</b> – make it suit what your eyes
                  enjoy most.
                </List.Item>
                <List.Item>
                  <b>Privacy focused</b> – no data is collected at all. Even
                  your preferences are stored locally.
                </List.Item>
                <List.Item>
                  <b>Supported by donations</b> – we want to keep this free but
                  hate ads, just like you.
                </List.Item>
              </List>

              <Group mt={30}>
                <Button radius="xl" size="md" className={classes.control}>
                  Install now
                </Button>
                <Button
                  variant="default"
                  radius="xl"
                  size="md"
                  className={classes.control}
                >
                  Source code
                </Button>
              </Group>
            </div>
            {/* <Image src={logo} className={classes.image} alt="" /> */}
            <StaticImage
              src="../assets/the-muslims-dashboard-2.jpg"
              placeholder="tracedSVG"
              objectFit="contain"
              alt=""
              className={classes.image}
            />
          </div>
        </Container>
      </div>
    </Layout>
  )
}
