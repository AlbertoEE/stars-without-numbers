import { DraggedState } from "@/utilities/DragAndDrop";
import { create } from 'zustand';

export interface AttributeValue {
    [key: string]: string;
}

interface BasicAttributesState {
    initialValues: AttributeValue,
    chosenAttributes: AttributeValue;
    dragged: DraggedState;
    draggedOver: DraggedState;
    detail: string;
    setInitialValues: (newAttributes: AttributeValue) => void;
    setChosenAttributes: (newAttributes: AttributeValue) => void;
    setDragged: (newDraggedState: DraggedState) => void;
    setDraggedOver: (newDraggedState: DraggedState) => void;
    setDetail: (newDetail: string) => void;
}

export const useStoreBasicAttributes = create<BasicAttributesState>(((set) => ({
    initialValues: { A: "14", B: "12", C: "11", D: "10", E: "9", F: "7", },
    chosenAttributes: { strength: "0", dexterity: "0", constitution: "0", intelligence: "0", wisdom: "0", charisma: "0", },
    dragged: { from: "", value: "", key: "" },
    draggedOver: { from: "", value: "", key: "" },
    detail: "",
    setInitialValues: (newInitialValues) => set({ initialValues: newInitialValues }),
    setChosenAttributes: (newAttributes) => set({ chosenAttributes: newAttributes }),
    setDragged: (newDragged) => set({ dragged: newDragged }),
    setDraggedOver: (newDraggedOver) => set({ draggedOver: newDraggedOver }),
    setDetail: (newDetail) => set({ detail: newDetail }),
})));