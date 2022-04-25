import React from "react"
import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles,
} from "@mantine/core"

import { MoonStars } from "tabler-icons-react"

// export function Feature({ icon: Icon, title, description }) {
//   const theme = useMantineTheme()
//   return (
//     <div>
//       <ThemeIcon variant="light" size={40} radius={40}>
//         <Icon style={{ width: 20, height: 20 }} />
//       </ThemeIcon>
//       <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
//         {title}
//       </Text>
//       <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
//         {description}
//       </Text>
//     </div>
//   )
// }

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

  kbd: {
    fontSize: "inherit",
  },
}))

export default function FeaturesGrid() {
  const { classes } = useStyles()
  const theme = useMantineTheme()
  // const features = data.map((feature, index) => (
  //   <Feature {...feature} key={index} />
  // ))

  return (
    <Container id="features" className={classes.wrapper}>
      <Title className={classes.title}>Everything you need in a new tab</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Goodbye to requiring multiple tabs for the info you need.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={theme.spacing.xl * 2}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "xl" },
          { maxWidth: 755, cols: 1, spacing: "xl" },
        ]}
      >
        <div>
          <ThemeIcon variant="light" size={40} radius={40}>
            <MoonStars style={{ width: 20, height: 20 }} />
          </ThemeIcon>
          <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
            Privacy focused
          </Text>
          <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
            We don't collect or use personal data for anything. You can check
            the source code for yourself on GitHub.
          </Text>
        </div>

        <div>
          <ThemeIcon variant="light" size={40} radius={40}>
            <MoonStars style={{ width: 20, height: 20 }} />
          </ThemeIcon>
          <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
            No ads
          </Text>
          <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
            They're annoying and intrusive. You don't like them. Neither do we.
            Instead, development is supported by voluntary donations.
          </Text>
        </div>

        <div>
          <ThemeIcon variant="light" size={40} radius={40}>
            <MoonStars style={{ width: 20, height: 20 }} />
          </ThemeIcon>
          <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
            Continuing development
          </Text>
          <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
            This isn't a dead project. New features are in the works and your
            user experience is constantly being improved.
          </Text>
        </div>

        <div>
          <ThemeIcon variant="light" size={40} radius={40}>
            <MoonStars style={{ width: 20, height: 20 }} />
          </ThemeIcon>
          <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
            Prayer times
          </Text>
          <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
            Accurate, location-based prayer times so that you're always on top
            of your salah. Countdown to the next prayer so you can plan ahead.
            Even choose your preferred calculation method.
          </Text>
        </div>

        <div>
          <ThemeIcon variant="light" size={40} radius={40}>
            <MoonStars style={{ width: 20, height: 20 }} />
          </ThemeIcon>
          <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
            Islamic reminders
          </Text>
          <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
            Every new tab becomes an opportunity to learn something new about
            your deen. Straight from the Qur'an and authentic Hadith sources.
          </Text>
        </div>

        <div>
          <ThemeIcon variant="light" size={40} radius={40}>
            <MoonStars style={{ width: 20, height: 20 }} />
          </ThemeIcon>
          <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
            Customisability
          </Text>
          <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
            Make the dashboard match your vibes - from accent colours to
            light/dark modes. Custom fonts, floating notes and more coming soon.
          </Text>
        </div>
      </SimpleGrid>
    </Container>
  )
}
