import React, { useState } from 'react';
import { projects } from '../../../../../../storage/projects';

export function Project({ className, index }) {
  return (
    <a href={projects[index].link} target="_blank" className='col-12 col-md-6'>
      <div data-aos="fade-up" className="project">
        <img
          className="project__picture"
          src={projects[index].image}
          alt="Кейс фронтенд-разработчика"
        />
        <div className="project__desc">
          <p className="project__title">{projects[index].title}</p>
          <p className="project__stack">{projects[index].stack}</p>
        </div>
      </div>
    </a>
  );
}
