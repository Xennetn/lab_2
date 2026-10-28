import { useState, useEffect } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const triggerModal = () => {
    window.dispatchEvent(new Event('open-modal'));
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-100 dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
          <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
            <button 
              onClick={triggerModal}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-slate-700 dark:hover:bg-slate-600 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-slate-600 cursor-pointer"
            >
              ✉️ Відкрити форму
            </button>
            <button 
              onClick={toggleTheme}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 cursor-pointer"
            >
              Режим: {theme === 'light' ? '☀️ День' : '🌙 Ніч'}
            </button>
          </div>
          <Header />
          <main className="p-6 sm:p-8 space-y-8">
            <Education />
            <Experience />
            <Reviews />
          </main>
          <Footer />
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

export default App;
