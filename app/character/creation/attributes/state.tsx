import { create } from 'zustand';
import { DraggedState } from "@/utilities/DragAndDrop";

export interface AttributeValue {
    [key: string]: string;
}

interface MyState {
    initialValues: AttributeValue,
    attributes: AttributeValue;
    dragged: DraggedState;
    draggedOver: DraggedState;
    detail: string;
    setInitialValues: (newAttributes: AttributeValue) => void;
    setAttributes: (newAttributes: AttributeValue) => void;
    setDragged: (newDraggedState: DraggedState) => void;
    setDraggedOver: (newDraggedState: DraggedState) => void;
    setDetail: (newDetail: string) => void;
}

export const useStore = create<MyState>(((set) => ({
    initialValues: { A: "14", B: "12", C: "11", D: "10", E: "9", F: "7", },
    attributes: { Strength: "0", Dexterity: "0", Constitution: "0", Intelligence: "0", Wisdom: "0", Charisma: "0", },
    dragged: { from: "", value: "", key: "" },
    draggedOver: { from: "", value: "", key: "" },
    detail: "",
    setInitialValues: (newInitialValues) => set({ initialValues: newInitialValues }),
    setAttributes: (newAttributes) => set({ attributes: newAttributes }),
    setDragged: (newDragged) => set({ dragged: newDragged }),
    setDraggedOver: (newDraggedOver) => set({ draggedOver: newDraggedOver }),
    setDetail: (newDetail) => set({ detail: newDetail }),
})));