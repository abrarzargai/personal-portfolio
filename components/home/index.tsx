import Contact from './contact';
import Landing from './landing';
import Projects from './projects';
import Skills from './skills';
import Work from './work';

const HomePage = () => {
  return (
    <>
      <div className="bg-blue pt-28">
        <div className="overflow-x-hidden">
          <Landing />
          <Skills />
          <Work />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default HomePage;
