import {
  Button,
  Card,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import { Key } from "@react-types/shared";
import { useState } from "react";
import ChooseBenefitsTab from "../tabs/choose/ChooseBenefitsTab";
import PredefinedBenefitsTab from "../tabs/predifined/PredifinedBenefitsTab";
import RandomSkillTab from "../tabs/random/RandomSkillTab";
import { useStoreBackgroundState } from "../../../state";

export default function BackgroundDetail(props: { characterId: string }) {
  const {
    focusedBackground,
    setChosenBenefits,
    backgroundTab,
    setBackgroundTab,
    backgroundBenefitTab,
    setBackgroundBenefitTab,
    setRolledDice,
  } = useStoreBackgroundState();

  const [proposedTab, setProposedTab] = useState<Key>("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (focusedBackground == undefined) return;

  function handleBenefitTabChange(key: Key) {
    if (key == backgroundBenefitTab) return;

    if (backgroundBenefitTab == "predifined") {
      setChosenBenefits([focusedBackground!.benefits.free]);
      setBackgroundBenefitTab(key);
      return;
    }

    setProposedTab(key);
    onOpen();
  }

  function changeTabButClean() {
    setRolledDice(false);
    setChosenBenefits([focusedBackground!.benefits.free]);
    setBackgroundBenefitTab(proposedTab);
    onClose();
  }

  return (
    <div className="w-full h-full">
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                ⚠️ Progress Could be lost!
              </ModalHeader>
              <ModalBody>
                <p>
                  If you change the background benefit selection method you will
                  lose the progress you have made so far. Are you sure you want
                  to select a new method?{" "}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={changeTabButClean}>
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Tabs
        key="a"
        aria-label="Options"
        classNames={{
          base: "w-full h-[5%]",
          tabList:
            "w-full gap-6 relative rounded-none p-0 border-b border-divider",
          panel: "p-0 h-[95%]",
        }}
        selectedKey={backgroundTab}
        onSelectionChange={setBackgroundTab}
      >
        <Tab key="backgroundDescription" title="Description">
          <div className="p-5">
            <div className="flex flex-row">
              <Image
                className="ml-4 mb-4"
                src={`/imgs/backgrounds/${focusedBackground.name}.svg`}
                alt="me"
                width="64"
                height="64"
              />
              <h1 className="font-orbitron font-bold uppercase tracking-widest text-xs p-4">
                {focusedBackground.name}
              </h1>
            </div>
            <div className="px-3 py-4 whitespace-pre-line">
              {focusedBackground.description}
            </div>
          </div>
        </Tab>
        <Tab key="skills" title="Skills">
          <div className="w-full">
            <Tabs
              key="underlined"
              variant="underlined"
              aria-label="Options"
              fullWidth
              selectedKey={backgroundBenefitTab}
              onSelectionChange={handleBenefitTabChange}
            >
              <Tab key="predifined" title="Predefined">
                <PredefinedBenefitsTab
                  backgroundDefinition={focusedBackground}
                />
              </Tab>
              <Tab key="choose" title="Choose">
                <ChooseBenefitsTab background={focusedBackground} />
              </Tab>
              <Tab key="random" title="Random">
                <RandomSkillTab background={focusedBackground} />
              </Tab>
            </Tabs>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
