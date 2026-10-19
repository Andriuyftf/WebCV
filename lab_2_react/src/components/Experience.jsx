export default function Experience({
  experience,
  intro,
  learning,
}) {
  return (
    <section
      id="experience"
      className="scroll-mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-emerald-300">
        04 / Практика
      </p>

      <h2 className="mt-3 text-2xl font-semibold text-slate-50">
        Досвід і навчальна практика
      </h2>

      {experience.length === 0 ? (
        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
          <p>{intro}</p>
          <p>{learning}</p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {experience.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-slate-800 bg-slate-950 p-5"
            >
              <h3 className="text-lg font-semibold text-slate-50">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-emerald-300">
                {item.organization} · {item.period}
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-300">
                {item.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}