export default function About({ text, english }) {
  return (
    <section id="about">
      <h2>Про мене</h2>

      <p>{text}</p>

      <p>
        <strong>Англійська:</strong> {english}
      </p>
    </section>
  );
}