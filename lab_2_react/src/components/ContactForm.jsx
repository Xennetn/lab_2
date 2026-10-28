import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Автоматичний показ через 60 секунд за методичкою
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    // Додатковий слухач для миттєвого відкриття кнопкою (для перевірки та скриншота)
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-modal', handleOpen);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('open-modal', handleOpen);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl max-w-md w-full relative shadow-2xl border border-slate-200 dark:border-slate-700">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white text-2xl font-bold cursor-pointer"
        >
          &times;
        </button>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Форма зворотного зв'язку
        </h3>
        <form action="https://formspree.io/f/xppprdvj" method="POST" className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">Ім'я</label>
            <input type="text" name="name" required placeholder="Ваше ім'я" className="w-full px-3 py-2 border rounded-lg text-sm bg-slate-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">Email</label>
            <input type="email" name="_replyto" required placeholder="email@example.com" className="w-full px-3 py-2 border rounded-lg text-sm bg-slate-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">Телефон</label>
            <input type="tel" name="phone" placeholder="+380..." className="w-full px-3 py-2 border rounded-lg text-sm bg-slate-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">Повідомлення</label>
            <textarea name="message" rows="3" required placeholder="Текст повідомлення..." className="w-full px-3 py-2 border rounded-lg text-sm bg-slate-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white"></textarea>
          </div>
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg text-sm transition cursor-pointer">
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
