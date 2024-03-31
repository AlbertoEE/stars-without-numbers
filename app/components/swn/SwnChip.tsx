import React, { type ReactElement } from "react"
import { Chip, type ChipProps } from "@nextui-org/react"

interface SwnChipProps extends ChipProps {}

const SwnCard: React.FC<SwnChipProps> = ({
  className,
  ...props
}): ReactElement => {
  return (
    <Chip
      radius="sm"
      {...props}
      className={`bg-content2 rounded-sm shadow-2xl text-foreground ${className}`}
    />
  )
}

export default SwnCard
