import React from "react";
import type { IconType } from "react-icons";
import {
  FaDiagramProject,
  FaSwatchbook,
  FaServer,
  FaLayerGroup,
} from "react-icons/fa6";
import type { Skill as SkillType } from "@/types";

const SKILL_ICON_BY_ID: Record<number, IconType> = {
  1: FaLayerGroup,
  2: FaSwatchbook,
  3: FaDiagramProject,
  4: FaServer,
};

interface SkillProps {
  skill: SkillType;
}

export default function Skill({ skill }: SkillProps) {
  const Icon = SKILL_ICON_BY_ID[skill.id] ?? FaLayerGroup;

  return (
    <div data-aos="fade-up" className="skills__item bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors border border-white/10 h-full">
      <div className="skills__item-icon mb-4">
        <Icon className="skills__item-svg" aria-hidden size={40} />
      </div>

      <h3 className="text-xl font-bold mb-3 text-white">{skill.title}</h3>

      <p className="text-base text-gray-300 leading-relaxed">
        {skill.description}
      </p>
    </div>
  );
}
