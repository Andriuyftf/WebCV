import {
  FORM_ENDPOINT,
  REVIEWS_URL,
  readValue,
  writeValue,
  getSavedMode,
  getTimeTheme,
  collectSystemInfo,
  getStorageSnapshot,
} from './browser.js';

const storageList = document.getElementById('storage-list');

function renderStorage() {
  storageList.replaceChildren();

  const entries = getStorageSnapshot();

  if (entries === null) {
    storageList.textContent =
      'Браузер не дозволяє доступ до localStorage.';
    return;
  }

  for (const { key, text } of entries) {
    const item = document.createElement('div');
    item.className = 'lab-storage-item';

    const title = document.createElement('strong');
    title.textContent = key;

    const value = document.createElement('pre');
    value.textContent = text;

    item.append(title, value);
    storageList.append(item);
  }
}

window.addEventListener('storage', renderStorage);
window.addEventListener('cv-storage', renderStorage);

writeValue(
  'localStorage',
  'cv.environment',
  JSON.stringify(collectSystemInfo()),
);

renderStorage();

let mode = getSavedMode();

const themeButton = document.getElementById('theme-toggle');

function applyTheme() {
  const theme = mode === 'auto' ? getTimeTheme() : mode;

  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;

  themeButton.textContent =
    `Тема: ${theme === 'dark' ? 'темна' : 'світла'}`;

  themeButton.setAttribute(
    'aria-pressed',
    String(theme === 'dark'),
  );

  document.getElementById('theme-auto').setAttribute(
    'aria-pressed',
    String(mode === 'auto'),
  );

  document.getElementById('theme-status').textContent =
    mode === 'auto' ? 'Режим: за часом' : 'Режим: вручну';
}

themeButton.addEventListener('click', () => {
  mode =
    document.documentElement.dataset.theme === 'dark'
      ? 'light'
      : 'dark';

  writeValue('localStorage', 'cv.theme', mode);
  applyTheme();
});

document.getElementById('theme-auto').addEventListener('click', () => {
  mode = 'auto';

  writeValue('localStorage', 'cv.theme', mode);
  applyTheme();
});

applyTheme();

writeValue('localStorage', 'cv.theme', mode);

setInterval(applyTheme, 60000);

document.addEventListener('visibilitychange', applyTheme);

async function loadReviews() {
  const status = document.getElementById('reviews-status');
  const list = document.getElementById('reviews-list');

  try {
    const response = await fetch(REVIEWS_URL);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const reviews = await response.json();

    if (!Array.isArray(reviews)) {
      throw new Error('Некоректна відповідь');
    }

    for (const review of reviews) {
      const card = document.createElement('article');
      card.className = 'lab-review';

      const name = document.createElement('h3');
      name.textContent = review.name;

      const email = document.createElement('p');
      email.className = 'lab-review-email';
      email.textContent = review.email;

      const body = document.createElement('p');
      body.textContent = review.body;

      card.append(name, email, body);
      list.append(card);
    }

    status.textContent =
      reviews.length ? '' : 'Відгуків поки немає.';
  } catch {
    status.textContent =
      'Не вдалося завантажити відгуки. Перевір інтернет і онови сторінку.';

    status.classList.add('lab-error');
  }
}

loadReviews();

const dialog = document.getElementById('contact-dialog');
const form = document.getElementById('contact-form');

form.action = FORM_ENDPOINT;

const openContact = () => {
  if (!dialog.open) {
    dialog.showModal();
  }
};

document.getElementById('open-contact').addEventListener(
  'click',
  openContact,
);

document.getElementById('close-contact').addEventListener(
  'click',
  () => dialog.close(),
);

dialog.addEventListener('close', () => {
  writeValue('sessionStorage', 'cv.contactClosed', '1');
});

form.addEventListener('submit', () => {
  writeValue('sessionStorage', 'cv.contactClosed', '1');
});

if (readValue('sessionStorage', 'cv.contactClosed') !== '1') {
  setTimeout(() => {
    if (readValue('sessionStorage', 'cv.contactClosed') !== '1') {
      openContact();
    }
  }, 60000);
}