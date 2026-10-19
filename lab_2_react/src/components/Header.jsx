const navigation = [
  ['about', 'Про мене'],
  ['skills', 'Навички'],
  ['projects', 'Проєкти'],
  ['experience', 'Досвід'],
  ['education', 'Освіта'],
  ['contacts', 'Контакти'],
];

export default function Header({ name, role }) {
  return (
    <header
      id="top"
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:sticky lg:top-6"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-emerald-300">
        DevOps Control Room
      </p>

      <div
        aria-hidden="true"
        className="mt-7 flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-300/10 font-mono text-xl text-emerald-300"
      >
        &gt;_
      </div>

      <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-50">
        {name}
      </h1>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        {role}
      </p>

      <nav
        aria-label="Розділи резюме"
        className="mt-8 border-t border-slate-800 pt-5"
      >
        <ul className="flex flex-wrap gap-2 lg:flex-col">
          {navigation.map(([id, label], index) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-slate-800 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-xs text-emerald-300"
                >
                  0{index + 1}
                </span>

                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}