import React from "react";
import KitIcon, { KIT_ICON_LG } from "@/shared/ui/kit-icon";
import type { KitIconName } from "@/shared/ui/kit-icon";
import type { Skill as SkillType } from "@/shared/types";

const SKILL_ICON_BY_ID: Record<number, KitIconName> = {
  1: "laptop",
  2: "sparkle",
  3: "git-branch",
  4: "server",
  5: "checklist",
};

interface SkillProps {
  skill: SkillType;
}

export default function Skill({ skill }: SkillProps) {
  const iconName = SKILL_ICON_BY_ID[skill.id] ?? "laptop";

  return (
    <div data-aos="fade-up" className="skills__item bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors border border-white/10 h-full">
      <div className="skills__item-icon mb-4">
        <KitIcon name={iconName} className="skills__item-svg" size={KIT_ICON_LG} />
      </div>

      <h3 className="text-xl font-bold mb-3 text-white">{skill.title}</h3>

      <p className="text-base text-gray-300 leading-relaxed">
        {skill.description}
      </p>
    </div>
  );
}
