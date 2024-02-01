import { AttributeDefinition } from '@/models/AttributeDefinitionModels';
import { BackgroundBenefit, BackgroundDefinition } from '@/models/BackgroundDefinitionModels';
import { SkillDefinition } from '@/models/SkillDefinitionModels';
import { Attributes } from '@/models/chatacter';
import { create } from 'zustand';

interface DefinitionData {
    skillDefinitionList: SkillDefinition[],
    attributeDefinitionList: AttributeDefinition[],
    backgroundDefinitionList: BackgroundDefinition[],
    setSkillDefinitions: (newSkillDefinitionList: SkillDefinition[]) => void;
    setAttributeDefinitions: (newAttributeDefinitionList: AttributeDefinition[]) => void;
    setBackgroundDefinitionList: (newBackgroundDefinitionList: BackgroundDefinition[]) => void;
}

export const useDefinitionData = create<DefinitionData>(((set) => ({
    skillDefinitionList: [],
    attributeDefinitionList: [],
    backgroundDefinitionList: [],
    setSkillDefinitions: (newSkillDefinitionList) => set({ skillDefinitionList: newSkillDefinitionList }),
    setAttributeDefinitions: (newAttributeDefinitionList) => set({ attributeDefinitionList: newAttributeDefinitionList }),
    setBackgroundDefinitionList: (newBackgroundDefinitionList) => set({ backgroundDefinitionList: newBackgroundDefinitionList }),
})));

interface PlayerDecisions {
    baseAttributesDecision: Attributes,
    backgroundBenefitsDecision: BackgroundBenefit[],
    setBaseAttributesDecision: (newBaseAttributesDecision: Attributes) => void;
    setBackgroundBenefitsDecision: (newAttributeDefinitionList: BackgroundBenefit[]) => void;
}

export const useDecisions = create<PlayerDecisions>(((set) => ({
    baseAttributesDecision: new Attributes(),
    backgroundBenefitsDecision: [],
    setBaseAttributesDecision: (newBaseAttributesDecision) => set({ baseAttributesDecision: newBaseAttributesDecision }),
    setBackgroundBenefitsDecision: (newAttributeDefinitionList) => set({ backgroundBenefitsDecision: newAttributeDefinitionList }),
})));