import { useState, useEffect } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState('');

  useEffect(() => {
    const info = {
      platform: navigator.platform,
      userAgent: navigator.userAgent
    };
    localStorage.setItem('react_system_info', JSON.stringify(info));

    const saved = JSON.parse(localStorage.getItem('react_system_info'));
    if (saved) {
      setSysInfo(`Система: ${saved.platform} | Браузер: ${saved.userAgent}`);
    }
  }, []);

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-4 px-6 text-center text-sm text-slate-500 dark:text-slate-400">
      <p>&copy; 2026 Михайло Дудас. Всі права захищені.</p>
      {sysInfo && <p className="mt-2 text-xs opacity-75">{sysInfo}</p>}
    </footer>
  );
}

export default Footer;
