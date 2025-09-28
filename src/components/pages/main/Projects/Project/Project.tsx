import React, { useState } from "react";
import { projects } from "../../../../../../storage/projects";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface ProjectProps {
  className?: string;
  index: number;
}

export function Project({ className = "", index }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const project = projects[index];

  return (
    <div
      className={`relative backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 transform h-full flex flex-col border border-gray-700/30 ${
        isHovered ? "shadow-lg -translate-y-0.5 bg-gray-800/20" : "shadow-md"
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
    >
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-all duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-1.5 transition-colors duration-300 group-hover:text-primary">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.stack.split(" • ").map((tech, i) => (
            <span
              key={i}
              className="text-xs text-gray-200 px-2 py-0.5 rounded-full transition-all duration-300 hover:bg-primary/80 hover:text-white backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.achievements && project.achievements.length > 0 && (
          <ul className="space-y-1.5 mt-2 mb-3 flex-1 pl-0">
            {project.achievements.map((achievement, i) => (
              <li key={i} className="text-xs text-gray-200 leading-relaxed">
                {achievement}
              </li>
            ))}
          </ul>
        )}

        <div className="flex space-x-3 mt-auto pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-gray-400 hover:text-primary transition-colors"
              aria-label="View code on GitHub"
            >
              <FiGithub className="mr-1" /> Code
            </a>
          )}
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-gray-400 hover:text-primary transition-colors"
              aria-label="View live project"
            >
              <FiExternalLink className="mr-1" />
              {project.link.includes("github.com") ? "Code" : "Live"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
