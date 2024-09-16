/* eslint-disable no-console */
/* eslint-disable react/no-danger */
import { Footer, Navbar } from '@shared-components';
import { user } from '@utils/constants';
import { motion } from 'framer-motion';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  const spring = { type: 'spring', damping: 20, stiffness: 100, when: 'afterChildren' };

  return (
    <div>
      <Head>
        <title>
          {user.name} | {user.designation}
        </title>
        <meta name="title" content={`${user.name} | ${user.designation}`} />
        <meta name="description" content={user.about} />
        <meta name="keywords" content={user.about} />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content={user.name} />
        <meta httpEquiv="content-language" content="en" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={user.website} />
        <meta property="og:title" content={`${user.name} | ${user.designation}`} />
        <meta property="og:description" content={user.about} />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      {/* <AnimatePresence> */}
      <div className="page-transition-wrapper overflow-x-hidden min-h-screen">
        <motion.div
          transition={spring}
          key={router.pathname}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          id="page-transition-container">
          <Navbar />
          <Component {...pageProps} key={router.pathname} />
          <Footer />
        </motion.div>
      </div>
      {/* </AnimatePresence> */}
      {/* )} */}
    </div>
  );
}

export default MyApp;
