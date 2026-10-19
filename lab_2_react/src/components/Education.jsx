export default function Education({ education }) {
  return (
    <section
      id="education"
      className="scroll-mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 xl:col-span-2"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-emerald-300">
        05 / Навчання
      </p>

      <h2 className="mt-3 text-2xl font-semibold text-slate-50">
        Освіта
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <h3 className="font-semibold leading-7 text-slate-50">
              {item.institution}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              {item.program}
            </p>

            <p className="mt-3 font-mono text-xs leading-6 text-emerald-300">
              {item.period}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}