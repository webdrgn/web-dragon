import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Aos from 'aos';
import Image from 'next/image';

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
        <Image
          src={skill.image}
          alt="illustration"
          width={20}
          height={40}
          className="skill-img w-20 lg:w-28"
          quality={100}
          unoptimized={true}
        />

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
