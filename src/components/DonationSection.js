import React from "react"
import { Text, Title, Container, createStyles, Group } from "@mantine/core"
import DonationCards from "./DonationCards"

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  title: {
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left",
    },
  },
}))

export default function DonationSection() {
  const { classes } = useStyles()

  return (
    <Container id="donation" className={classes.wrapper}>
      <Title className={classes.title}>Become a supporter</Title>

      <Container size={560} p={0} mb="xl">
        <Text size="sm" className={classes.description}>
          Help keep this extension free for the masses and support its
          development.
        </Text>
      </Container>
      <Group position="center">
        <DonationCards />
      </Group>
    </Container>
  )
}
