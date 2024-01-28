import { Card, CardBody, Image } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

export default function SectionButton(props: {
    path: string
}) {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <Card
      className="w-full mb-3"
      isPressable
      onPress={() => router.push(`${pathName}/${props.path}`)}
    >
      <CardBody>
        <div className="flex flex-row items-center">
          <Image
            className="mr-4"
            src={`/imgs/gui/confirmed.svg`}
            alt="me"
            width="16"
            height="16"
          />
          <span>{props.path.charAt(0).toUpperCase() + props.path.slice(1)}</span>
        </div>
      </CardBody>
    </Card>
  );
}
