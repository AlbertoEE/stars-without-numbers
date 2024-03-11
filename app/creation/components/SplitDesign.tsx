import { Card } from "@nextui-org/card"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect, type ReactElement } from "react"

export default function SplitDesign(props: {
  leftChild: React.ReactNode
  rightChild: React.ReactNode
}): ReactElement {
  const router = useRouter()
  const path = usePathname().split("/")
  path.pop()

  // Estado para controlar la visibilidad del componente derecho
  const [isVisible, setIsVisible] = useState(false)

  useEffect((): void => {
    if (props.rightChild) {
      // Inicia la animación después de un breve retraso (opcional)
      setTimeout((): void => {
        setIsVisible(true)
      }, 10) // Ajusta este tiempo según sea necesario
    } else {
      setIsVisible(false)
    }
  }, [props.rightChild])

  return (
    <div className="flex flex-row items-center justify-center gap-4 w-full h-full">
      <Card className="h-[85%] w-1/2 flex flex-col items-center">
        {props.leftChild}
      </Card>
      {props.rightChild && (
        <Card
          className={`h-[85%] w-1/2 flex flex-col items-center transition-all duration-500 ${
            isVisible
              ? "opacity-100 scale-100 max-h-full"
              : "opacity-0 scale-0 max-h-0"
          }`}
        >
          {props.rightChild}
        </Card>
      )}
    </div>
  )
}
