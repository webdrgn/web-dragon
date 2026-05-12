import React from "react";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FaArrowTrendUp,
  FaBug,
  FaLayerGroup,
  FaUserClock,
} from "react-icons/fa6";

const METRICS: Array<{
  value: string;
  label: string;
  context: string;
  Icon: IconType;
}> = [
  {
    value: "100+",
    label: "Компонентов в дизайн-системе",
    context:
      "Библиотека для платформенных продуктов, проектирование, Storybook, версионирование",
    Icon: FaLayerGroup,
  },
  {
    value: "30–70%",
    label: "Ускорение разработки",
    context:
      "Типовые дашборды и новые фичи после внедрения платформы и стандартов",
    Icon: FaArrowTrendUp,
  },
  {
    value: "−45%",
    label: "Критических багов в проде",
    context:
      "После усиления code review, регламентов релизов и контроля качества",
    Icon: FaBug,
  },
  {
    value: "4 → 1",
    label: "Неделя онбординга",
    context:
      "Сокращение времени выхода новых разработчиков на самостоятельную работу",
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
      <header className="mascot-section-header">
        <div className="mascot-section-wrap" data-aos="fade-up">
          <Image
            src="./img/dragon4.png"
            alt=""
            width={220}
            height={220}
            className="mascot-section-img"
            quality={100}
            unoptimized={true}
            sizes="(max-width: 640px) min(88vw, 220px), (max-width: 1024px) 180px, 220px"
          />
        </div>
        <h2 id="metrics-heading" className="section-heading" data-aos="fade-up">
          Цифры и факты
        </h2>
      </header>

      <p className="section-lead metrics__lead" data-aos="fade-up">
        Измеримый эффект платформенной работы и процессов: масштаб
        дизайн-системы, скорость поставки, стабильность в проде и онбординг
        команды — в контексте продуктовых задач.
      </p>

      <ul className="metrics__grid">
        {METRICS.map((m) => (
          <li key={m.label} data-aos="fade-up" className="metrics__card">
            <div className="metrics__value">{m.value}</div>
            <div className="metrics__label-row">
              <m.Icon className="metrics__card-icon" aria-hidden size={18} />
              <div className="metrics__label">{m.label}</div>
            </div>
            <p className="metrics__context">{m.context}</p>
          </li>
        ))}
      </ul>

      <p className="metrics__footnote" data-aos="fade-up">
        Дополнительно:{" "}
        <strong>50+ технических интервью</strong> как интервьюер, вывод{" "}
        <strong>4 разработчиков</strong> на уверенное ревью кода.
      </p>
    </section>
  );
}
