import { ActionIcon, useMantineColorScheme } from "@mantine/core"
import React from "react"
import { MoonStars } from "tabler-icons-react"

const Logo = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <ActionIcon
      variant="hover"
      size="xl"
      color="cyan"
      style={{ marginLeft: "-10px" }}
      onClick={() => toggleColorScheme()}
    >
      <MoonStars style={{ strokeWidth: "1.75px" }} />
    </ActionIcon>
  )
}

export default Logo
