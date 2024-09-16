import { Loader, SocialBar } from '@shared-components';
import dynamic from 'next/dynamic';

const ProjectsPage = dynamic(() => import('../components/projects/index'), {
  ssr: false,
  loading: () => <Loader />
});

const Projects = () => {
  return (
    <>
      <ProjectsPage />
      <SocialBar />
    </>
  );
};
export default Projects;
