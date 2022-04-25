import React from "react"
import { Text, Button, Paper, createStyles, Group } from "@mantine/core"
import { CircleCheck } from "tabler-icons-react"

const useStyles = createStyles((theme) => ({
  icon: {
    marginRight: 5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}))

const optionsData = [
  {
    name: "Essential",
    price: "£2",
    timing: "/month",
    features: ["Support the core running costs", "Cancel anytime"],
    buttonText: "Choose Essential",
  },
  {
    name: "Pillar",
    price: "£4",
    timing: "/month",
    features: [
      "Support running costs",
      "Choose which features to develop next",
      "Test new features currently in development",
      "Cancel anytime",
    ],
    buttonText: "Choose Pillar",
  },
  {
    name: "Custom",
    price: "£X",
    timing: "one-off",
    features: ["Choose a custom amount to donate"],
    buttonText: "Coming soon",
  },
]

export default function DonationCards() {
  const { classes } = useStyles()

  const options = optionsData.map((option, index) => {
    return (
      <Paper
        key={index}
        radius="md"
        withBorder
        p="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
          // maxWidth: "300px",
        })}
      >
        <Text align="center" size="xl" weight={600} mt="md">
          {option.name}
        </Text>
        {option.features.map((feature, index) => {
          return (
            <Text key={index} color="dimmed" size="xs" mt="xs">
              <Group position="left" spacing="0px">
                <CircleCheck size={18} className={classes.icon} />
                <Text size="xs">{feature}</Text>
              </Group>
            </Text>
          )
        })}

        <Text align="center" style={{ fontSize: "48px" }} mt="sm">
          {option.price}
        </Text>
        <Text align="center" color="dimmed" size="sm" mt="-12px">
          {option.timing}
        </Text>

        <Button variant="default" fullWidth mt="xl">
          {option.buttonText}
        </Button>
      </Paper>
    )
  })

  return <>{options}</>
}
