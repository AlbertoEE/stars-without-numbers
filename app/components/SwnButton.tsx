import React, { type ReactElement } from "react"
import { Button, type ButtonProps } from "@nextui-org/react"

interface SwnButtonProps extends ButtonProps {}

const SwnButton: React.FC<SwnButtonProps> = ({
  className,
  ...props
}): ReactElement => {
  const colorRelated =
    "bg-content2 text-content2-foreground hover:text-white hover:border-white"

  return (
    <Button
      className={`${props.color === undefined && colorRelated} bg-stripe-lime-600 ${className}`}
      {...props}
    />
  )
}

export default SwnButton
