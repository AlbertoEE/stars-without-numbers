import React, { type ReactElement } from "react"
import { Button, type ButtonProps } from "@nextui-org/react"

interface SwnButtonProps extends ButtonProps {}

const SwnButton: React.FC<SwnButtonProps> = ({
  className,
  ...props
}): ReactElement => {
  return (
    <Button
      {...props}
      className={`bg-content2 rounded-sm shadow-2xl text-foreground ${className}`}
    />
  )
}

export default SwnButton
