export const FORM_ENDPOINT = 'https://formspree.io/f/xkjjvpgp';

export const REVIEWS_URL =
  'https://jsonplaceholder.typicode.com/posts/13/comments';

export function readValue(storage, key) {
  try {
    return window[storage].getItem(key);
  } catch {
    return null;
  }
}

export function writeValue(storage, key, value) {
  try {
    window[storage].setItem(key, value);
    window.dispatchEvent(new Event('cv-storage'));
    return true;
  } catch {
    return false;
  }
}

export function getSavedMode() {
  const mode = readValue('localStorage', 'cv.theme');

  return ['light', 'dark'].includes(mode) ? mode : 'auto';
}

export function getTimeTheme() {
  const hour = new Date().getHours();

  return hour >= 7 && hour < 21 ? 'light' : 'dark';
}

export function collectSystemInfo() {
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    vendor: navigator.vendor,
    language: navigator.language,
    languages: navigator.languages,
    cookieEnabled: navigator.cookieEnabled,
    online: navigator.onLine,

    hardwareConcurrency:
      navigator.hardwareConcurrency ?? 'Недоступно',

    deviceMemoryGB:
      navigator.deviceMemory ?? 'Недоступно',

    maxTouchPoints: navigator.maxTouchPoints,

    screen:
      `${window.screen.width} × ${window.screen.height}`,

    viewport:
      `${window.innerWidth} × ${window.innerHeight}`,

    pixelRatio: window.devicePixelRatio,

    timeZone:
      Intl.DateTimeFormat().resolvedOptions().timeZone,

    capturedAt: new Date().toISOString(),
  };
}

export function getStorageSnapshot() {
  try {
    return Array.from(
      { length: localStorage.length },
      (_, index) => {
        const key = localStorage.key(index);
        const value = localStorage.getItem(key);

        let text = value;

        try {
          text = JSON.stringify(JSON.parse(value), null, 2);
        } catch {
          text = value;
        }

        return { key, text };
      },
    );
  } catch {
    return null;
  }
}