import React from "react";
import type { IconType } from "react-icons";
import {
  FaArrowTrendUp,
  FaBug,
  FaLayerGroup,
  FaUserClock,
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
    value: "100+",
    label: "компонентов",
    context:
      "С нуля собрал дизайн-систему. Storybook, версии, контроль изменений. Новичок разбирается за день.",
    Icon: FaLayerGroup,
  },
  {
    value: "30–70%",
    label: "быстрее",
    context:
      "Типовые задачи теперь делаются за день, вместо недели. Новые фичи — точечная надстройка без переписывания старого.",
    Icon: FaArrowTrendUp,
  },
  {
    value: "−45%",
    label: "критических багов",
    context:
      "Код-ревью и регламенты релизов. Системно и не потому что горит.",
    Icon: FaBug,
  },
  {
    value: "месяц → неделя",
    label: "онбординг",
    context:
      "Новый разработчик выходит на результат за семь дней. Просто благодаря тому, что в коде порядок.",
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
