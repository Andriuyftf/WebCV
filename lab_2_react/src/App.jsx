import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Contacts from './components/Contacts.jsx';
import Footer from './components/Footer.jsx';

import { profile } from './data/profile.js';

export default function App() {
  return (
    <>
      <Header
        name={profile.name}
        role={profile.role}
      />

      <main>
        <About
          text={profile.about}
          english={profile.english}
        />

        <Skills
          skills={profile.skills}
        />

        <Projects
          projects={profile.projects}
          intro={profile.projectsIntro}
        />

        <Experience
          experience={profile.experience}
          intro={profile.experienceIntro}
          learning={profile.experienceLearning}
        />

        <Education
          education={profile.education}
        />

        <Contacts
          email={profile.email}
          github={profile.github}
          linkedin={profile.linkedin}
        />
      </main>

      <Footer
        name={profile.name}
      />
    </>
  );
}