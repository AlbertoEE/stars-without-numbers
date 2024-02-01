import { DraggedState } from "@/utilities/DragAndDrop";
import { create } from 'zustand';

export interface AttributeValue {
    [key: string]: string;
}

interface MyState {
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

export const useStore = create<MyState>(((set) => ({
    initialValues: { A: "14", B: "12", C: "11", D: "10", E: "9", F: "7", },
    chosenAttributes: { Strength: "0", Dexterity: "0", Constitution: "0", Intelligence: "0", Wisdom: "0", Charisma: "0", },
    dragged: { from: "", value: "", key: "" },
    draggedOver: { from: "", value: "", key: "" },
    detail: "",
    setInitialValues: (newInitialValues) => set({ initialValues: newInitialValues }),
    setChosenAttributes: (newAttributes) => set({ chosenAttributes: newAttributes }),
    setDragged: (newDragged) => set({ dragged: newDragged }),
    setDraggedOver: (newDraggedOver) => set({ draggedOver: newDraggedOver }),
    setDetail: (newDetail) => set({ detail: newDetail }),
})));