// 1. LocalStorage: збереження даних браузера/ОС та вивід у футері
const systemData = {
  platform: navigator.platform,
  userAgent: navigator.userAgent
};
localStorage.setItem('vanilla_system_info', JSON.stringify(systemData));

const saved = JSON.parse(localStorage.getItem('vanilla_system_info'));
const footerSys = document.getElementById('system-info');
if (footerSys && saved) {
  footerSys.textContent = `Система: ${saved.platform} | Браузер: ${saved.userAgent}`;
}

// 2. Fetch API: відгуки для Варіанта 9 (posts/9/comments)
async function fetchComments() {
  const container = document.getElementById('reviews-container');
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/9/comments');
    const data = await res.json();
    container.innerHTML = '';
    data.forEach(item => {
      const card = document.createElement('article');
      card.className = 'cv-article';
      card.innerHTML = `
        <h4 style="margin: 0 0 4px 0; color: #3182ce;">${item.name}</h4>
        <p style="margin: 0 0 6px 0; font-size: 0.8rem; color: #718096;">${item.email}</p>
        <p style="margin: 0; font-size: 0.9rem;">${item.body}</p>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = '<p style="color: red;">Помилка завантаження відгуків.</p>';
  }
}
fetchComments();

// 3. Модальне вікно (таймер 60 сек + кнопки)
const modal = document.getElementById('contact-modal');
const closeBtn = document.getElementById('close-modal-btn');
const openBtn = document.getElementById('open-modal-btn');

setTimeout(() => {
  if (modal) modal.style.display = 'flex';
}, 60000);

if (openBtn) openBtn.onclick = () => modal.style.display = 'flex';
if (closeBtn) closeBtn.onclick = () => modal.style.display = 'none';

// 4. Розумна тема День/Ніч (автоматично 07:00-21:00 + ручна кнопка)
const themeBtn = document.getElementById('theme-toggle-btn');
const hour = new Date().getHours();
if (hour < 7 || hour >= 21) {
  document.body.classList.add('dark-theme');
}

if (themeBtn) {
  themeBtn.onclick = () => {
    document.body.classList.toggle('dark-theme');
  };
}
