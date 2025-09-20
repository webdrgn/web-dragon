import React from 'react';
import Image from 'next/image';
import type { Skill as SkillType } from '@/types';

interface SkillProps {
  skill: SkillType;
}

export default function Skill({ skill }: SkillProps) {
  return (
    <div data-aos="fade-up" className="skill col-12 col-md-6">
      <div className="skill__preview">
        <Image
          src={skill.image}
          alt="illustration"
          width={20}
          height={40}
          className="skill-img w-20 lg:w-28"
          quality={100}
          unoptimized={true}
        />

        <h2 className="skill__title text-lg lg:text-2xl">{skill.title}</h2>
      </div>

      <p className="skill__description text-sm lg:text-xl text-[var(--primary)]">
        {skill.description}
      </p>
    </div>
  );
}
