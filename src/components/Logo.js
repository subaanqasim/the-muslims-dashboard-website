import { ActionIcon } from "@mantine/core"
import React from "react"
import { MoonStars } from "tabler-icons-react"

const Logo = () => {
  return (
    <ActionIcon
      variant="hover"
      size="xl"
      color="cyan"
      style={{ marginLeft: "-10px" }}
    >
      <MoonStars style={{ strokeWidth: "1.75px" }} />
    </ActionIcon>
  )
}

export default Logo
