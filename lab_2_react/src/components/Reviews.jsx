import { useState, useEffect } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/9/comments')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Помилка завантаження відгуків:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b-2 border-indigo-500 pb-2 mb-4">
        Відгуки попередніх роботодавців (Варіант 9)
      </h2>
      {loading ? (
        <p className="text-slate-500">Завантаження відгуків...</p>
      ) : (
        <div className="space-y-3">
          {reviews.map(item => (
            <article key={item.id} className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">{item.name}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{item.email}</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;
