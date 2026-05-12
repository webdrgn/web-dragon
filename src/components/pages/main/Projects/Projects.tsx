import React from 'react'
import Image from 'next/image'
import type { IconType } from 'react-icons'
import {
  FaBullseye,
  FaChartLine,
  FaClipboardList,
  FaWrench,
} from 'react-icons/fa'

const STAR_LABEL_ICONS: Record<
  'Ситуация' | 'Задача' | 'Действия' | 'Результат',
  IconType
> = {
  Ситуация: FaClipboardList,
  Задача: FaBullseye,
  Действия: FaWrench,
  Результат: FaChartLine,
}

type StarLabel = keyof typeof STAR_LABEL_ICONS

function CaseStudyDt({ label }: { label: StarLabel }) {
  const Icon = STAR_LABEL_ICONS[label]
  return (
    <dt className="case-study__dt">
      <Icon className="case-study__dt-icon" size={15} aria-hidden />
      <span>{label}</span>
    </dt>
  )
}

export default function Projects() {
  return (
    <div
      id="cases"
      className="projects"
    >
      <header className="mascot-section-header">
        <div
          className="mascot-section-wrap"
          data-aos="fade-up"
        >
          <Image
            src="./img/dragon2.png"
            alt=""
            width={220}
            height={220}
            className="mascot-section-img"
            quality={100}
            unoptimized={true}
            sizes="(max-width: 640px) min(88vw, 220px), (max-width: 1024px) 180px, 220px"
          />
        </div>
        <h2
          className="section-heading"
          data-aos="fade-up"
        >
          Кейсы
        </h2>
        <p
          className="projects__kicker"
          data-aos="fade-up"
        >
          Кейсы из продуктовой работы
        </p>
      </header>

      <p
        className="projects__intro section-lead"
        data-aos="fade-up"
      >
        Три кейса в формате{' '}
        <abbr title="Situation, Task, Action, Result">STAR</abbr>: ситуация,
        задача, действия и измеримый результат. Стек указываю там, где он
        действительно определял архитектуру и решения.
      </p>

      <article
        data-aos="fade-up"
        className="case-study"
      >
        <h3 className="case-study__title">
          Event-платформа: единый UI от витрины до кабинетов
        </h3>
        <p className="case-study__proof">
          Один набор экранов на пути:{' '}
          <strong>событие → оплата → кабинеты зрителя и организатора</strong>
        </p>
        <dl className="case-study__star">
          <div className="case-study__row">
            <CaseStudyDt label="Ситуация" />
            <dd>
              Витрина, кабинеты и турнирные таблицы жили в копипасте;
              новый формат ивента или билета снова означал долгую ручную сборку и
              разный стиль между экранами.
            </dd>
          </div>
          <div className="case-study__row">
            <CaseStudyDt label="Задача" />
            <dd>
              Общий каркас под пики нагрузки и быстрый запуск новых форматов
              (промо, пакеты билетов, игровые сезоны) без своего
              мини-фронта на каждый поток.
            </dd>
          </div>
          <div className="case-study__row">
            <CaseStudyDt label="Действия" />
            <dd>
              Спроектировал многоуровневую библиотеку на{' '}
              <strong>100+ компонентов</strong>, ввёл Storybook, версионирование
              и контроль breaking changes, дизайн-токены и цикл согласования с
              дизайном.
            </dd>
          </div>
          <div className="case-study__row">
            <CaseStudyDt label="Результат" />
            <dd>
              Типовые сценарии (карточка события, места, оплата, кабинет)
              ускорились примерно на <strong>70%</strong>, новые фичи и форматы
              ивентов — примерно на <strong>40%</strong> за счёт библиотеки и
              стандартов.
            </dd>
          </div>
        </dl>
      </article>

      <article
        data-aos="fade-up"
        className="case-study"
      >
        <h3 className="case-study__title">
          Миграция легаси без остановки продукта
        </h3>
        <dl className="case-study__star">
          <div className="case-study__row">
            <CaseStudyDt label="Ситуация" />
            <dd>
              Наследие на jQuery и разрозненных паттернах: дублирование логики,
              высокая стоимость изменений, сложный онбординг.
            </dd>
          </div>
          <div className="case-study__row">
            <CaseStudyDt label="Задача" />
            <dd>
              Перевести продукт на Vue 3 / React и современный бандлер без
              простоя бизнеса и с контролируемым риском.
            </dd>
          </div>
          <div className="case-study__row">
            <CaseStudyDt label="Действия" />
            <dd>
              Поэтапная стратегия: выделение общих модулей, маршрутизация и
              инкрементальная замена экранов; единые правила код-ревью и
              релизов.
            </dd>
          </div>
          <div className="case-study__row">
            <CaseStudyDt label="Результат" />
            <dd>
              Мигрировал <strong>10+ проектов/потоков</strong> с легаси;
              высвободил у команд порядка <strong>20+ часов в неделю</strong> за
              счёт удаления дублирования и инструментов.
            </dd>
          </div>
        </dl>
      </article>

      <article
        data-aos="fade-up"
        className="case-study"
      >
        <h3 className="case-study__title">
          Качество и скорость в высоконагруженном интерфейсе
        </h3>
        <dl className="case-study__star">
          <div className="case-study__row">
            <CaseStudyDt label="Ситуация" />
            <dd>
              Маркетплейс и корпоративные сценарии с заметной аудиторией:
              просадки по Core Web Vitals и рост дефектов при частых релизах.
            </dd>
          </div>
          <div className="case-study__row">
            <CaseStudyDt label="Задача" />
            <dd>
              Удержать производительность и предсказуемость качества при росте
              функциональности.
            </dd>
          </div>
          <div className="case-study__row">
            <CaseStudyDt label="Действия" />
            <dd>
              Бюджеты производительности, профилирование, lazy-loading и сплит
              бандла; усиление ревью и регресса на критических путях.
            </dd>
          </div>
          <div className="case-study__row">
            <CaseStudyDt label="Результат" />
            <dd>
              Довёл ключевые метрики до <strong>Core Web Vitals 95+</strong> на
              целевых страницах; за счёт дисциплины качества снизил долю
              критических инцидентов примерно на <strong>45%</strong> в
              сравнении с предыдущим периодом.
            </dd>
          </div>
        </dl>
      </article>
    </div>
  )
}
