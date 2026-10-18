function Education() {
  return (
    <>
      <section className="bg-white rounded-xl shadow-lg border border-violet-100 p-6 transition hover:-translate-y-1 hover:shadow-xl">
        <h2 className="text-2xl font-semibold text-violet-600 border-b-2 border-violet-600 pb-2 mb-4">
          Освіта
        </h2>
        <article className="border-l-4 border-violet-600 pl-4">
          <h3 className="text-lg font-bold">
            Національний університет «Львівська політехніка»
          </h3>
          <p className="text-slate-600">
            Бакалаврат за спеціальністю «Кібербезпека та захист інформації» (2025 — дотепер)
          </p>
        </article>
      </section>

      <section className="bg-white rounded-xl shadow-lg border border-violet-100 p-6 transition hover:-translate-y-1 hover:shadow-xl">
        <h2 className="text-2xl font-semibold text-violet-600 border-b-2 border-violet-600 pb-2 mb-4">
          Навички (початковий рівень)
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 marker:text-violet-600">
          <li>Мови програмування: базовий синтаксис C# та Python</li>
          <li>Веброзробка: основи розмітки HTML5, базове знайомство з React</li>
          <li>Інструменти: базові команди Git, робота з терміналом Linux</li>
        </ul>
      </section>
    </>
  );
}

export default Education;