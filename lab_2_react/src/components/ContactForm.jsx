import { useEffect, useRef, useState } from 'react';

import {
  FORM_ENDPOINT,
  readValue,
  writeValue,
} from '../utils/browser.js';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (readValue('sessionStorage', 'cv.contactClosed') === '1') {
      return;
    }

    const timer = setTimeout(() => {
      if (readValue('sessionStorage', 'cv.contactClosed') !== '1') {
        setIsOpen(true);
      }
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  function handleClose() {
    setIsOpen(false);

    writeValue('sessionStorage', 'cv.contactClosed', '1');
  }

  return (
    <>
      <button
        type="button"
        className="lab-button lab-primary"
        onClick={() => setIsOpen(true)}
      >
        Зворотний зв’язок
      </button>

      <dialog
        ref={dialogRef}
        className="lab-dialog"
        aria-labelledby="contact-title"
        onClose={handleClose}
      >
        <h2 id="contact-title">Зворотний зв’язок</h2>

        <p>Надішли повідомлення Андрію.</p>

        <form
          className="lab-form"
          action={FORM_ENDPOINT}
          method="POST"
          onSubmit={() => {
            writeValue('sessionStorage', 'cv.contactClosed', '1');
          }}
        >
          <label htmlFor="contact-name">
            Ім’я

            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              maxLength={100}
              required
            />
          </label>

          <label htmlFor="contact-email">
            Email

            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              required
            />
          </label>

          <label htmlFor="contact-phone">
            Номер телефону

            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              pattern="[+]?[0-9][0-9 ]{6,19}"
              title="Номер із цифр і пробілів, за потреби з плюсом на початку"
              required
            />
          </label>

          <label htmlFor="contact-message">
            Повідомлення

            <textarea
              id="contact-message"
              name="message"
              maxLength={3000}
              required
            />
          </label>

          <div className="lab-actions">
            <button
              type="submit"
              className="lab-button lab-primary"
            >
              Надіслати
            </button>

            <button
              type="button"
              className="lab-button"
              onClick={() => setIsOpen(false)}
            >
              Закрити
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}