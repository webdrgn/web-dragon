import React, { useEffect } from 'react';
import Skill from './Skill/Skill.jsx';
import PropTypes from 'prop-types';
import 'aos/dist/aos.css';

function Skills(props) {
  return (
    <div id="skills" className="skills">
      <img
        data-aos="fade-up"
        className="skills__icon w-64 lg:w-1/3"
        src="./img/dragon3.png"
      />

      <h2 data-aos="fade-up">Скиллы</h2>

      <div data-aos="fade-up" className="skills__text">
        <p>
          Cертифицированный frontend-дракончик — знаю не только как писать код,
          но и как строить масштабируемые, быстрые и прибыльные интерфейсы.
          Прошёл курс «Мидл фронтенд-разработчик» в Яндекс Практикуме, чтобы:
        </p>

        <ul>
          <li>
            Писать не просто рабочий, а оптимальный код — где каждый компонент,
            хук и стор живут в отлаженной системе
          </li>
          <li>
            Довести до автоматизма паттерны, которые сокращают техдолг на старте
          </li>
          <li>
            Превращаю legacy в реактивные системы — не просто рефакторю, а
            провожу полную трансмутацию кода. Где был хаос унаследованных
            решений — возвожу современную архитектуру
          </li>
        </ul>

        <img
          src="./img/certificate-yandex.jpg"
          alt="Сертификат Яндекс Практикум"
          className='skills__certificate'
        />
      </div>

      <div data-aos="fade-up" className="skills__list grid">
        {props.skills.map((skill) => {
          return <Skill skill={skill} key={skill.id} />;
        })}
      </div>
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Skills;
