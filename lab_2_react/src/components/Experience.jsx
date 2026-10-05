export default function Experience({
  experience,
  intro,
  learning,
}) {
  return (
    <section id="experience">
      <h2>Досвід і навчальна практика</h2>

      {experience.length === 0 ? (
        <>
          <p>{intro}</p>
          <p>{learning}</p>
        </>
      ) : (
        experience.map((item) => (
          <article key={item.id}>
            <h3>{item.title}</h3>

            <p>
              {item.organization} · {item.period}
            </p>

            <ul>
              {item.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </article>
        ))
      )}
    </section>
  );
}