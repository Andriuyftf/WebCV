import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Contacts from './components/Contacts.jsx';
import Footer from './components/Footer.jsx';

import Reviews from './components/Reviews.jsx';
import ContactForm from './components/ContactForm.jsx';

import useTheme from './hooks/useTheme.js';
import { profile } from './data/profile.js';

export default function App() {
  const { theme, mode, setMode } = useTheme();

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300 antialiased selection:bg-emerald-300 selection:text-slate-950">
      <div className="mx-auto grid max-w-[1500px] items-start gap-6 p-4 sm:p-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <Header
          name={profile.name}
          role={profile.role}
        />

        <div className="min-w-0 space-y-6">
          <header
            className="lab-toolbar"
            aria-label="Керування CV"
          >
            <p>
              {mode === 'auto'
                ? 'Режим: за часом'
                : 'Режим: вручну'}
            </p>

            <button
              type="button"
              className="lab-button"
              aria-pressed={theme === 'dark'}
              onClick={() => {
                setMode(theme === 'dark' ? 'light' : 'dark');
              }}
            >
              Тема: {theme === 'dark' ? 'темна' : 'світла'}
            </button>

            <button
              type="button"
              className="lab-button"
              aria-pressed={mode === 'auto'}
              onClick={() => setMode('auto')}
            >
              За часом
            </button>

            <ContactForm />
          </header>

          <main className="grid gap-6 xl:grid-cols-2">
            <About
              text={profile.about}
              english={profile.english}
            />

            <Skills skills={profile.skills} />

            <Projects
              projects={profile.projects}
              intro={profile.projectsIntro}
            />

            <Experience
              experience={profile.experience}
              intro={profile.experienceIntro}
              learning={profile.experienceLearning}
            />

            <Education education={profile.education} />

            <Contacts
              email={profile.email}
              github={profile.github}
              linkedin={profile.linkedin}
            />

            <Reviews />
          </main>

          <Footer name={profile.name} />
        </div>
      </div>
    </div>
  );
}