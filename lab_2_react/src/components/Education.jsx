export default function Education({ education }) {
  return (
    <section id="education">
      <h2>Освіта</h2>

      {education.map((item) => (
        <article key={item.id}>
          <h3>{item.institution}</h3>

          <p>{item.program}</p>
          <p>{item.period}</p>
        </article>
      ))}
    </section>
  );
}