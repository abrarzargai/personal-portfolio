import { Loader } from '@shared-components';
import dynamic from 'next/dynamic';

const ConnectPage = dynamic(() => import('../components/connect/index'), {
  ssr: false,
  loading: () => <Loader />
});

const Contact = () => {
  return <ConnectPage />;
};

export default Contact;
