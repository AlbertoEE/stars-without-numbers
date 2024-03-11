import { Image } from "@nextui-org/react"
import { usePathname, useRouter } from "next/navigation"
import { type ReactElement } from "react"

export default function SectionButton(props: {
  desiredPath: string
  name?: string
}): ReactElement {
  const router = useRouter()
  const pathName = usePathname()

  const handleNavigate = (): void => {
    const currentPath = pathName
    const pathSplit = currentPath.split("/")
    pathSplit.pop()

    if (!currentPath.endsWith(`/${props.desiredPath}`)) {
      router.push(`${pathSplit.join("/")}/${props.desiredPath}`)
    }
  }

  return (
    <>
      <div
        className="p-3 text-white flex flex-row items-center gap-2"
        onClick={handleNavigate}
      >
        <Image
          className="m-0"
          src={`/imgs/attributes/strength.svg`}
          alt="me"
          width="32"
          height="32"
        />
        <span>
          {props.name
            ? props.name.toUpperCase()
            : props.desiredPath.toUpperCase()}
        </span>
      </div>
    </>
  )
}
