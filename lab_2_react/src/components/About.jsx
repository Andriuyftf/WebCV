export default function About({ text, english }) {
  return (
    <section
      id="about"
      className="scroll-mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 xl:col-span-2"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-emerald-300">
        01 / Профіль
      </p>

      <h2 className="mt-3 text-2xl font-semibold text-slate-50">
        Про мене
      </h2>

      <p className="mt-5 leading-8 text-slate-300">
        {text}
      </p>

      <p className="mt-6 inline-block rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-300">
        <strong className="text-slate-50">
          Англійська:
        </strong>{' '}
        {english}
      </p>
    </section>
  );
}