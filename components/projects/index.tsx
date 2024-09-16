import { ProjectCard } from '@shared-components';
import { project } from '@utils/constants';

const ProjectsPage = () => {
  return (
    <>
      <div className="bg-blue pt-28 pb-20">
        <div className="overflow-x-hidden">
          <div className="pt-10 ml-4 sm:mx-12 md:mx-16">
            <div className="mb-10">
              <h1 className="text-center text-3xl sm:text-2xl xl:text-3xl font-extrabold text-white leading-none mb-6">
                {project.title}
              </h1>
              <p className="text-center text-sm sm:text-7xl font-light text-white leading-none mb-6">
                {project.about}
              </p>
            </div>
            <div />
            <div className="grid md:grid-cols-2 gap-4 place-items-center">
              {project?.projects.map((p) => (
                <ProjectCard project={p} key={p.url} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
