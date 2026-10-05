export default function Contacts({ email, github, linkedin }) {
  const hasContacts = Boolean(email || github || linkedin);

  return (
    <section id="contacts">
      <h2>Контакти</h2>

      {hasContacts ? (
        <address>
          <ul>
            {email && (
              <li>
                Email:{' '}
                <a href={`mailto:${email}`}>
                  {email}
                </a>
              </li>
            )}

            {github && (
              <li>
                GitHub:{' '}
                <a href={github}>
                  Мій профіль GitHub
                </a>
              </li>
            )}

            {linkedin && (
              <li>
                LinkedIn:{' '}
                <a href={linkedin}>
                  Мій профіль LinkedIn
                </a>
              </li>
            )}
          </ul>
        </address>
      ) : (
        <p>Контактні дані поки не додані.</p>
      )}
    </section>
  );
}