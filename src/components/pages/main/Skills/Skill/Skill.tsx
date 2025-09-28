import React from "react";
import Image from "next/image";
import type { Skill as SkillType } from "@/types";

interface SkillProps {
  skill: SkillType;
}

export default function Skill({ skill }: SkillProps) {
  return (
    <div data-aos="fade-up" className="skills__item bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors border border-white/10 h-full">
      <div className="skills__item-icon mb-4">
        <Image
          src={skill.image}
          alt={skill.title}
          width={48}
          height={48}
          className="w-12 h-12"
          quality={100}
          unoptimized={true}
        />
      </div>

      <h3 className="text-xl font-bold mb-3 text-white">{skill.title}</h3>
      
      <p className="text-sm text-gray-300 leading-relaxed">
        {skill.description}
      </p>
    </div>
  );
}
