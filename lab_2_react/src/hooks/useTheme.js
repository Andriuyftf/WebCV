import { useEffect, useState } from 'react';

import {
  getSavedMode,
  getTimeTheme,
  writeValue,
} from '../utils/browser.js';

export default function useTheme() {
  const [mode, setMode] = useState(getSavedMode);

  const [theme, setTheme] = useState(() => {
    const saved = getSavedMode();

    return saved === 'auto' ? getTimeTheme() : saved;
  });

  useEffect(() => {
    function updateTheme() {
      const next = mode === 'auto' ? getTimeTheme() : mode;

      setTheme(next);

      document.documentElement.dataset.theme = next;
      document.documentElement.style.colorScheme = next;
    }

    updateTheme();

    writeValue('localStorage', 'cv.theme', mode);

    const timer = setInterval(updateTheme, 60000);

    document.addEventListener('visibilitychange', updateTheme);

    return () => {
      clearInterval(timer);

      document.removeEventListener(
        'visibilitychange',
        updateTheme,
      );
    };
  }, [mode]);

  return { theme, mode, setMode };
}