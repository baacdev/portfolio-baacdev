import Hero from "./components/Hero";
import SectionContainer from "./components/SectionContainer";
import Layout from "./layouts/Layout";
import Briefcase from "./components/icons/Briefcase";
import ExperienceList from "./components/ExperienceList";
import Projects from "./components/Projects";
import CodeIcon from "./components/icons/CodeIcon";
import ProfileCheck from "./components/icons/ProfileCheck";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Layout>
      <main className="px-4">
        <SectionContainer className="py-16 md:py-24">
          <Hero />
        </SectionContainer>
      </main>

      <div className="px-4 space-y-24">
        {/* Experiencia */}

        <SectionContainer id="experiencia">
          <h2 className="flex items-center mb-14 text-3xl font-semibold gap-x-3 text-black dark:text-white">
            <Briefcase className="size-8" />
            Experiencia laboral
          </h2>
          <ExperienceList />
        </SectionContainer>

        {/* Proyectos */}
        <SectionContainer id="proyectos">
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
            <CodeIcon className="size-7" />
            Proyectos
          </h2>
          <Projects />
        </SectionContainer>

        {/* Sobre mí */}
        <SectionContainer id="sobre-mi">
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white">
            <ProfileCheck className="size-8" />
            Sobre mí
          </h2>
          <AboutMe />
        </SectionContainer>
      </div>
    </Layout>
  );
}

export default App;
