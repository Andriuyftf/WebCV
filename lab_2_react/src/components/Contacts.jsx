export default function Contacts({ email, github, linkedin }) {
  const contacts = [
    {
      label: 'Email',
      value: email,
      href: email ? `mailto:${email}` : '',
      text: email,
    },
    {
      label: 'GitHub',
      value: github,
      href: github,
      text: 'Мій профіль GitHub',
    },
    {
      label: 'LinkedIn',
      value: linkedin,
      href: linkedin,
      text: 'Мій профіль LinkedIn',
    },
  ].filter((contact) => contact.value);

  return (
    <section
      id="contacts"
      className="scroll-mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 xl:col-span-2"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-emerald-300">
        06 / Зв’язок
      </p>

      <h2 className="mt-3 text-2xl font-semibold text-slate-50">
        Контакти
      </h2>

      {contacts.length > 0 ? (
        <address className="mt-6 not-italic">
          <ul className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {contacts.map((contact) => (
              <li
                key={contact.label}
                className="min-w-0"
              >
                <a
                  href={contact.href}
                  className="block h-full rounded-xl border border-slate-700 bg-slate-950 p-4 transition-colors hover:border-emerald-300 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                >
                  <span className="block font-mono text-xs text-slate-400">
                    {contact.label}
                  </span>

                  <span className="mt-2 block text-sm leading-6 break-words text-emerald-300">
                    {contact.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </address>
      ) : (
        <p className="mt-5 text-slate-300">
          Контактні дані поки не додані.
        </p>
      )}
    </section>
  );
}