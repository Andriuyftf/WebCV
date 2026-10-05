export default function Projects({ projects, intro }) {
  return (
    <section id="projects">
      <h2>Проєкти</h2>

      {projects.length === 0 ? (
        <p>{intro}</p>
      ) : (
        projects.map((project) => (
          <article key={project.id}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            {project.result && (
              <p>
                <strong>Результат:</strong> {project.result}
              </p>
            )}

            {project.repository && (
              <a href={project.repository}>
                Переглянути код проєкту
              </a>
            )}
          </article>
        ))
      )}
    </section>
  );
}