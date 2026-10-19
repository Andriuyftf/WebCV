export default function Skills({ skills }) {
  return (
    <section
      id="skills"
      className="scroll-mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 xl:col-span-2"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-emerald-300">
        02 / Технології
      </p>

      <h2 className="mt-3 text-2xl font-semibold text-slate-50">
        Навички
      </h2>

      <ul className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5 transition-colors hover:border-emerald-300/50"
          >
            <h3 className="font-semibold text-slate-50">
              {skill.name}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              {skill.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}