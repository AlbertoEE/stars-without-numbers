import React, { type ReactElement } from "react"
import { type ButtonProps } from "@nextui-org/react"
import { Button, extendVariants } from "@nextui-org/react"

interface SwnButtonProps extends ButtonProps {}

export const CustomButton = extendVariants(Button, {
  variants: {
    color: {
      warning: "bg-stripe-warning-default",
      danger: "bg-stripe-danger-default text-danger-foreground",
      success: "bg-stripe-success-default",
    },
  },
})

const SwnButton: React.FC<SwnButtonProps> = ({
  className,
  ...props
}): ReactElement => {
  const colorRelated =
    "bg-content2 text-content2-foreground hover:text-white hover:border-white"

  return (
    <CustomButton
      className={`${props.color === undefined && colorRelated} text-red- rounded-sm ${className}`}
      {...props}
    />
  )
}

export default SwnButton
