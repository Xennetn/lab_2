function Experience() {
  return (
    <section className="md:col-span-2 bg-white rounded-xl shadow-lg border border-violet-100 p-6 transition hover:-translate-y-1 hover:shadow-xl">
      <h2 className="text-2xl font-semibold text-violet-600 border-b-2 border-violet-600 pb-2 mb-4">
        Практичний досвід та навчальні проєкти
      </h2>

      <article className="border-l-4 border-violet-600 pl-4 mb-4">
        <h3 className="text-lg font-bold">Університетські лабораторні роботи</h3>
        <p className="text-slate-600">
          Написання базових програм на C# та Python, створення перших структурованих вебсторінок.
        </p>
      </article>

      <article className="border-l-4 border-violet-600 pl-4">
        <h3 className="text-lg font-bold">Робота з контролем версій (Git)</h3>
        <p className="text-slate-600">
          Ініціалізація локальних сховищ, створення комітів та публікація навчальних робіт на GitHub.
        </p>
      </article>
    </section>
  );
}

export default Experience;