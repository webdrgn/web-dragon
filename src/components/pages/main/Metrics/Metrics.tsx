import React from "react";
import type { IconType } from "react-icons";
import {
  FaArrowTrendUp,
  FaBug,
  FaLayerGroup,
  FaUserClock,
  FaUsers,
} from "react-icons/fa6";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import { SECTION_MASCOTS } from "@/config/constants";

const METRICS: Array<{
  value: string;
  label: string;
  context: string;
  Icon: IconType;
}> = [
  {
    value: "70–100+",
    label: "компонентов",
    context:
      "Собрал дизайн-систему с нуля. Storybook, версии, changelog. Новый разработчик заходит в проект и сразу понимает, где что лежит. Всё понятно за час. Онбординг дешевеет. Ошибок меньше.",
    Icon: FaLayerGroup,
  },
  {
    value: "20+",
    label: "специалистов",
    context:
      "Найм, онбординг, рост. Выстраиваю команду так, чтобы она выдавала результат без постоянных согласований и работы по ночам перед релизом.",
    Icon: FaUsers,
  },
  {
    value: "30–70%",
    label: "быстрее",
    context:
      "Задача, которая раньше съедала неделю, теперь делается за день. Новые фичи встраиваются точечно. Переписывать половину проекта не нужно. Команда та же, скорость другая.",
    Icon: FaArrowTrendUp,
  },
  {
    value: "−45%",
    label: "критических багов",
    context:
      "Баги не доезжают до прода. Релизный пайплайн и ревью для дела, не для галочки. Правила существуют, чтобы работало, не потому что «так надо». В релизный день достаточно нажать кнопку деплоя.",
    Icon: FaBug,
  },
  {
    value: "месяц → неделя",
    label: "онбординг",
    context:
      "Новичок заливает задачи в прод на второй неделе. Никто не подсказывает, где лежат константы. Команда не тратит время на объяснения. Бизнес не платит за три недели простоя.",
    Icon: FaUserClock,
  },
];

export default function Metrics() {
  return (
    <section
      id="metrics"
      className="metrics"
      aria-labelledby="metrics-heading"
    >
      <header className="metrics__header">
        <SectionHeading id="metrics-heading" mascot={SECTION_MASCOTS.metrics}>
          Цифры
        </SectionHeading>
      </header>

      <p className="section-lead metrics__lead" data-aos="fade-up">
        То, что я считаю важным и умею измерять.
      </p>

      <ul className="metrics__grid">
        {METRICS.map((metric) => (
          <li key={metric.label} data-aos="fade-up" className="metrics__card">
            <div className="metrics__value">{metric.value}</div>
            <div className="metrics__label-row">
              <metric.Icon className="metrics__card-icon" aria-hidden size={18} />
              <div className="metrics__label">{metric.label}</div>
            </div>
            <p className="metrics__context">{metric.context}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
