"use client";

import React, { ReactNode, useEffect } from 'react';
import useSWR from 'swr';
import { useStore } from './state'; // Adjust the import path as needed
import { skillsDefinitionRepository, attributeDefinitionRepository } from '@/injection/injection';
import { AttributeDefinition } from '@/models/AttributeDefinitionModels';
import { SkillDefinition } from '@/models/SkillDefinitionModels';


export default function Layout(props: { children: ReactNode }) {
    const { setAttributeDefinitions, setSkillDefinitions } = useStore()
    const { data: skillDefinitions } = useSWR<SkillDefinition[]>(
        "GlobalSkillDefinition",
        skillsDefinitionRepository.getSkills
    );
    const { data: attributeDefinitions } = useSWR<AttributeDefinition[]>(
        "GlobalAttributeDefinition",
        attributeDefinitionRepository.getAttributes
    );

    useEffect(() => {
        if (attributeDefinitions && skillDefinitions) {
            setSkillDefinitions(skillDefinitions)
            setAttributeDefinitions(attributeDefinitions)
        }
    }, [skillDefinitions, attributeDefinitions, setSkillDefinitions, setAttributeDefinitions]);

    return props.children;
};

