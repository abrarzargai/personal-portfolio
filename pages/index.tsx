import { Loader, SocialBar } from '@shared-components';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('../components/home/index'), {
  ssr: false,
  loading: () => <Loader />
});

const Home = () => {
  return (
    <>
      <SocialBar />
      <HomePage />
    </>
  );
};

export default Home;
