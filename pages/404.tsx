import { Loader } from '@shared-components';
import dynamic from 'next/dynamic';

const NotFoundPage = dynamic(() => import('../components/notfound/index'), {
  ssr: false,
  loading: () => <Loader />
});

const NotFound = () => {
  return (
    <>
      <NotFoundPage />
    </>
  );
};

export default NotFound;
