import { Background, Skill } from "./data";

export interface BackgroundRepository {
    getBackgrounds: () => Background[]
}

export interface SkillRepository {
    getSkills: () => Skill[]
}

export interface AttributeRepository {
    getAttributes: () => 
}