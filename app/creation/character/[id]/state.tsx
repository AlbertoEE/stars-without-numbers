import { AttributeDefinition } from '@/models/AttributeDefinitionModels';
import { BackgroundDefinition } from '@/models/BackgroundDefinitionModels';
import { SkillDefinition } from '@/models/SkillDefinitionModels';
import { create } from 'zustand';

interface MyState {
    skillDefinitionList: SkillDefinition[],
    attributeDefinitionList: AttributeDefinition[],
    backgroundDefinitionList: BackgroundDefinition[],
    setSkillDefinitions: (newSkillDefinitionList: SkillDefinition[]) => void;
    setAttributeDefinitions: (newAttributeDefinitionList: AttributeDefinition[]) => void;
    setBackgroundDefinitionList: (newBackgroundDefinitionList: BackgroundDefinition[]) => void;
}

export const useGlobalStore = create<MyState>(((set) => ({
    skillDefinitionList: [],
    attributeDefinitionList: [],
    backgroundDefinitionList: [],
    setSkillDefinitions: (newSkillDefinitionList) => set({ skillDefinitionList: newSkillDefinitionList }),
    setAttributeDefinitions: (newAttributeDefinitionList) => set({ attributeDefinitionList: newAttributeDefinitionList }),
    setBackgroundDefinitionList: (newBackgroundDefinitionList) => set({ backgroundDefinitionList: newBackgroundDefinitionList }),
})));