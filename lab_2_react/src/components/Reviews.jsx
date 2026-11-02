import { useEffect, useState } from 'react';

import { REVIEWS_URL } from '../utils/browser.js';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const response = await fetch(REVIEWS_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error('Некоректна відповідь');
        }

        setReviews(data);
      } catch {
        if (!controller.signal.aborted) {
          setError(
            'Не вдалося завантажити відгуки. Перевір інтернет і онови сторінку.',
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => controller.abort();
  }, []);

  return (
    <section id="reviews" className="lab-panel">
      <h2>Навчальні відгуки</h2>

      <p>
        Демонстраційні коментарі JSONPlaceholder,
        не реальні рекомендації роботодавців.
      </p>

      {loading && (
        <p role="status" className="lab-status">
          Завантаження відгуків…
        </p>
      )}

      {error && (
        <p role="alert" className="lab-error">
          {error}
        </p>
      )}

      {!loading && !error && reviews.length === 0 && (
        <p className="lab-status">
          Відгуків поки немає.
        </p>
      )}

      <div className="lab-review-grid">
        {reviews.map((review) => (
          <article key={review.id} className="lab-review">
            <h3>{review.name}</h3>

            <p className="lab-review-email">
              {review.email}
            </p>

            <p>{review.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}