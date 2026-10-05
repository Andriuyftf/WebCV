export default function Skills({ skills }) {
  return (
    <section id="skills">
      <h2>Навички</h2>

      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            <strong>{skill.name}:</strong> {skill.description}
          </li>
        ))}
      </ul>
    </section>
  );
}