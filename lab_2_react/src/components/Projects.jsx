export default function Projects({ projects, intro }) {
  return (
    <section
      id="projects"
      className="scroll-mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-emerald-300">
        03 / Портфоліо
      </p>

      <h2 className="mt-3 text-2xl font-semibold text-slate-50">
        Проєкти
      </h2>

      {projects.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-slate-700 bg-slate-950 p-5 text-sm leading-7 text-slate-300">
          {intro}
        </p>
      ) : (
        <div className="mt-6 space-y-4">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border border-slate-800 bg-slate-950 p-5"
            >
              <h3 className="text-lg font-semibold text-slate-50">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {project.description}
              </p>

              {project.result && (
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  <strong className="text-slate-50">
                    Результат:
                  </strong>{' '}
                  {project.result}
                </p>
              )}

              {project.repository && (
                <a
                  href={project.repository}
                  className="mt-4 inline-block rounded text-sm text-emerald-300 underline underline-offset-4 hover:text-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                >
                  Переглянути код проєкту
                </a>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}