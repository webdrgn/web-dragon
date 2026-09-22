import React from "react";
import KitIcon, { KIT_ICON_MD } from "@/shared/ui/kit-icon";
import type { KitIconName } from "@/shared/ui/kit-icon";
import SectionHeading from "@/shared/ui/section-heading";
import DragonAssistant from "@/features/dragon-assistant";
import { WEB_DRAGON_TIPS } from "@/shared/config";
import MetricValue from "./MetricValue";

const METRICS: Array<{
  value: string;
  label: string;
  context: string;
  icon: KitIconName;
}> = [
  {
    value: "70–100+",
    label: "компонентов",
    context:
      "Собрал дизайн-систему с нуля. Storybook, версии, changelog. Новый разработчик заходит в проект и сразу понимает, где что лежит. Всё понятно за час. Онбординг дешевеет. Ошибок меньше.",
    icon: "presentation",
  },
  {
    value: "20+",
    label: "специалистов",
    context:
      "Найм, онбординг, рост. Выстраиваю команду так, чтобы она выдавала результат без постоянных согласований и работы по ночам перед релизом.",
    icon: "users",
  },
  {
    value: "30–70%",
    label: "быстрее",
    context:
      "Задача, которая раньше съедала неделю, теперь делается за день. Новые фичи встраиваются точечно. Переписывать половину проекта не нужно. Команда та же, скорость другая.",
    icon: "target",
  },
  {
    value: "−45%",
    label: "критических багов",
    context:
      "Баги не доезжают до прода. Релизный пайплайн и ревью для дела, не для галочки. Правила существуют, чтобы работало, не потому что «так надо». В релизный день достаточно нажать кнопку деплоя.",
    icon: "bug",
  },
  {
    value: "месяц → неделя",
    label: "онбординг",
    context:
      "Новичок заливает задачи в прод на второй неделе. Никто не подсказывает, где лежат константы. Команда не тратит время на объяснения. Бизнес не платит за три недели простоя.",
    icon: "history",
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
        <SectionHeading id="metrics-heading">Цифры</SectionHeading>
        <DragonAssistant
          tipId={WEB_DRAGON_TIPS.metrics.tipId}
          icon={WEB_DRAGON_TIPS.metrics.icon}
          text={WEB_DRAGON_TIPS.metrics.text}
          className="dragon-guide--section"
        />
      </header>

      <p className="section-lead metrics__lead" data-aos="fade-up">
        То, что я считаю важным и умею измерять.
      </p>

      <ul className="metrics__grid">
        {METRICS.map((metric) => (
          <li key={metric.label} data-aos="fade-up" className="metrics__card">
            <MetricValue value={metric.value} />
            <div className="metrics__label-row">
              <KitIcon name={metric.icon} className="metrics__card-icon" size={KIT_ICON_MD} />
              <div className="metrics__label">{metric.label}</div>
            </div>
            <p className="metrics__context">{metric.context}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
