import React from 'react';
import Tilt from 'react-tilt';

interface Project {
  url: string;
  img: string;
  name: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Tilt className="Tilt cursor-pointer" options={{ max: 25 }}>
      <div className="my-4 mx-8 lg:mx-16 rounded-2xl transition-all duration-300 transform hover:opacity-80 hover:shadow-violet-5xl">
        <div>
          <img src={project.img} alt={project.name} className="rounded-2xl" />
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectCard;
