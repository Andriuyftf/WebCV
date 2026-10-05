export default function Header({ name, role }) {
  return (
    <header id="top">
      <p>DevOps Control Room — персональне CV</p>

      <h1>{name}</h1>
      <p>{role}</p>

      <nav aria-label="Розділи резюме">
        <ul>
          <li>
            <a href="#about">Про мене</a>
          </li>
          <li>
            <a href="#skills">Навички</a>
          </li>
          <li>
            <a href="#projects">Проєкти</a>
          </li>
          <li>
            <a href="#experience">Досвід</a>
          </li>
          <li>
            <a href="#education">Освіта</a>
          </li>
          <li>
            <a href="#contacts">Контакти</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}