import { Select, SelectItem, Input, Image } from "@nextui-org/react"
import { type Key, type Selection } from "@react-types/shared"
import { type ReactElement } from "react"

export default function Filter(props: {
  inputState: string
  setInputState: (value: string) => void
  selectKeysState: Iterable<Key>
  setSelectKeysState: (keys: Selection) => any
  selectOptionList: string[]
  imageFolder: string
}): ReactElement {
  return (
    <div className="h-[10%] flex flex-row items-center justify-center space-between gap-3 pb-5">
      <Input
        label="Filter"
        placeholder="Type to filter..."
        className="max-w-[50%]"
        value={props.inputState}
        onValueChange={props.setInputState}
      />
      <Select
        label="Filter"
        placeholder="Choose interesting options..."
        selectionMode="multiple"
        selectedKeys={props.selectKeysState}
        className="max-w-[50%]"
        onSelectionChange={props.setSelectKeysState}
      >
        {props.selectOptionList.map((option): ReactElement => (
          <SelectItem key={option} textValue={option}>
            <div className="flex flex-row">
              <Image
                loading="eager"
                className="mx-4 my-0 flex-1"
                src={`${props.imageFolder}/${option}.svg`}
                alt="me"
                width="24"
                height="24"
              />
              <div className="flex-1">{option}</div>
            </div>
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}
