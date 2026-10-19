export default function Footer({ name }) {
  return (
    <footer className="flex flex-col gap-3 border-t border-slate-800 px-1 pt-5 text-xs leading-6 text-slate-400 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © 2026 {name}. DevOps Control Room.
      </p>

      <a
        href="#top"
        className="self-start rounded text-emerald-300 hover:text-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
      >
        На початок ↑
      </a>
    </footer>
  );
}