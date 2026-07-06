import React from "react";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import { SECTION_MASCOTS } from "@/config/constants";
import { skills } from "../../../../../storage/skills";
import Skill from "./Skill/Skill";

export default function Skills() {
  return (
    <div id="stack" className="skills">
      <header className="skills__header">
        <SectionHeading mascot={SECTION_MASCOTS.stack} className="skills__title">
          Технологии
        </SectionHeading>
      </header>

      <div className="skills__content">
        <p
          data-aos="fade-up"
          className="section-lead skills__lead"
        >
          Стек сгруппирован по зонам ответственности: платформа и UI,
          интеграции и данные на клиенте, при необходимости Node на полном цикле.
          Технологии подбираю под задачу, ограничения продукта и эксплуатацию в
          проде.
        </p>

        <div className="skills__grid grid">
          {skills.map((skill) => (
            <div key={skill.id} className="col-12 col-md-6">
              <Skill skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
