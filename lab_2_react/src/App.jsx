import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-violet-50 text-slate-800 font-sans">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-8 grid gap-6 md:grid-cols-2">
        <section className="md:col-span-2 bg-white rounded-xl shadow-lg border border-violet-100 p-6 transition hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-violet-600 border-b-2 border-violet-600 pb-2 mb-4">
            Про мене
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Студент другого курсу. Цікавлюся базовими концепціями інформаційної безпеки, роботою комп'ютерних мереж та основами веброзробки. Набуваю практичного досвіду в процесі виконання університетських завдань.
          </p>
        </section>
        <Education />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;