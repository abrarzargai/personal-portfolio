import { Loader } from '@shared-components';
import dynamic from 'next/dynamic';

const WorkPage = dynamic(() => import('../components/work/index'), {
  ssr: false,
  loading: () => <Loader />
});

const Work = () => <WorkPage />;

export default Work;
