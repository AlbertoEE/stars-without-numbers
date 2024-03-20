import React, { type ReactElement } from "react"
import { type ButtonProps } from "@nextui-org/react"
import { CustomButton } from "./CustomButton"

interface SwnButtonProps extends ButtonProps {}

const SwnButton: React.FC<SwnButtonProps> = ({
  className,
  ...props
}): ReactElement => {
  const colorRelated =
    "bg-content2 text-content2-foreground hover:text-white hover:border-white"

  return (
    <CustomButton
      className={`${props.color === undefined && colorRelated} rounded-sm ${className}`}
      {...props}
    />
  )
}

export default SwnButton
