import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Aos from 'aos';

function Skill({ skill }) {
  const [isActive, setIsActive] = useState(false);

  const handle = () => {
    setIsActive((isActive) => !isActive);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up" className="skill col-12 col-md-6" onClick={handle}>
      <div className="skill__preview">
        <img src={skill.image} className="skill-img w-16 lg:w-28" alt="иконка" />

        <h1 className="skill__title text-lg lg:text-2xl">{skill.title}</h1>
      </div>

      <p className="skill__description text-sm lg:text-xl text-[var(--primary)]">
        {skill.description}
      </p>
    </div>
  );
}

Skill.propTypes = {
  skill: PropTypes.object.isRequired,
};

export default Skill;
