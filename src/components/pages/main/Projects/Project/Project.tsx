import React from 'react';
import { projects } from '../../../../../../storage/projects';
import Image from 'next/image';

interface ProjectProps {
  className?: string;
  index: number;
}

export function Project({ className = '', index }: ProjectProps) {
  return (
    <a href={projects[index].link} target="_blank" className={`col-12 col-md-6 ${className}`}>
      <div data-aos="fade-up" className="project">
        <Image
          className="project__picture"
          src={projects[index].image}
          alt="Кейс фронтенд-разработчика"
          width={800}
          height={600}
          unoptimized={true}
        />
        <div className="project__desc">
          <p className="project__title">{projects[index].title}</p>
          <p className="project__stack">{projects[index].stack}</p>
        </div>
      </div>
    </a>
  );
}
