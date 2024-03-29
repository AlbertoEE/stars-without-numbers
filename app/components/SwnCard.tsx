import React, { type ReactElement } from "react"
import { Card, type CardProps } from "@nextui-org/react"

interface SwnCardProps extends CardProps {
  cardInCard?: boolean
}

const SwnCard: React.FC<SwnCardProps> = ({
  cardInCard,
  className,
  ...props
}): ReactElement => {
  const classNameBg =
    cardInCard === undefined || !cardInCard ? "bg-content1" : "bg-content2"
  return (
    <Card
      {...props}
      className={`${classNameBg} rounded-sm shadow-2xl text-foreground ${className}`}
    />
  )
}

export default SwnCard
