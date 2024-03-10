import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { type PressEvent } from "@react-types/shared"

export default function ModalWarning(props: {
    isOpen: boolean,
    onClose: () => void;
    onAccept: (e: PressEvent) => void;
    warning: string;
}) {
    return <Modal backdrop="blur" isOpen={props.isOpen} onClose={props.onClose}>
        <ModalContent>
            {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1">
                        ⚠️ Progress Could be lost!
                    </ModalHeader>
                    <ModalBody>
                        <p>{props.warning}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Close
                        </Button>
                        <Button color="primary" onPress={props.onAccept}>
                            Yes
                        </Button>
                    </ModalFooter>
                </>
            )}
        </ModalContent>
    </Modal>
}