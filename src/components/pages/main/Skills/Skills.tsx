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
          Стек
        </SectionHeading>
      </header>

      <div className="skills__content">
        <div data-aos="fade-up">
          <p className="section-lead skills__lead">
          Технологии — просто инструмент. Выбираю под задачу, команду и нагрузку. JavaScript, TypeScript, Vue, React, Node.js, PHP, PostgreSQL, Docker, CI/CD, WebSocket, Centrifugo. Строил дизайн-системы, вытаскивал проекты из легаси, настраивал инфраструктуру и процессы. Не важно на чём — важно, чтобы работало, масштабировалось и не ломалось.
          </p>
        </div>

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
