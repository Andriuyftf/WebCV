import { useEffect, useState } from 'react';

import {
  collectSystemInfo,
  getStorageSnapshot,
  writeValue,
} from '../utils/browser.js';

export default function Footer({ name }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const refresh = () => {
      setEntries(getStorageSnapshot());
    };

    window.addEventListener('storage', refresh);
    window.addEventListener('cv-storage', refresh);

    writeValue(
      'localStorage',
      'cv.environment',
      JSON.stringify(collectSystemInfo()),
    );

    refresh();

    return () => {
      window.removeEventListener('storage', refresh);
      window.removeEventListener('cv-storage', refresh);
    };
  }, []);

  return (
    <footer className="border-t border-slate-800 pt-5 text-xs leading-6 text-slate-400">
      <div className="lab-footer-row">
        <p>
          © 2026 {name}. DevOps Control Room.
        </p>

        <a href="#top" className="text-emerald-300">
          На початок ↑
        </a>
      </div>

      <details className="lab-storage">
        <summary>Дані браузера та localStorage</summary>

        {entries === null ? (
          <p>
            Браузер не дозволяє доступ до localStorage.
          </p>
        ) : (
          entries.map(({ key, text }) => (
            <div key={key} className="lab-storage-item">
              <strong>{key}</strong>
              <pre>{text}</pre>
            </div>
          ))
        )}
      </details>
    </footer>
  );
}