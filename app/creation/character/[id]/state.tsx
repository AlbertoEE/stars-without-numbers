import { AttributeDefinition } from '@/models/AttributeDefinitionModels';
import { SkillDefinition } from '@/models/SkillDefinitionModels';
import { create } from 'zustand';

interface MyState {
    skillDefinitions: SkillDefinition[],
    attributeDefinitions: AttributeDefinition[],
    setSkillDefinitions: (newSkillDefinitions: SkillDefinition[]) => void;
    setAttributeDefinitions: (newAttributeDefinitions: AttributeDefinition[]) => void;
}

export const useGlobalStore = create<MyState>(((set) => ({
    skillDefinitions: [],
    attributeDefinitions: [],
    setSkillDefinitions: (newSkillDefinitions) => set({ skillDefinitions: newSkillDefinitions }),
    setAttributeDefinitions: (newAttributeDefinitions) => set({ attributeDefinitions: newAttributeDefinitions }),
})));