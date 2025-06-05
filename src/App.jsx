// src/App.jsx
import React from 'react'; 
import './styles/App.css'; 

function App() {
  return (
    <div className="app-container"> {/* Головний контейнер додатку */}
      <header className="app-header">
        <h1>Система Обліку Користувачів</h1>
        <nav className="app-nav">
          <ul>
            {/* Поки що це будуть просто заглушки. Пізніше ми сюди додамо React Router для навігації */}
            <li><a href="#">Головна</a></li>
            <li><a href="#">Список користувачів</a></li>
            <li><a href="#">Додати користувача</a></li>
          </ul>
        </nav>
      </header>

      <main className="app-main-content">
        {/* Тут буде відображатися вміст сторінок залежно від обраного пункту меню */}
        <p>Основний вміст сторінки буде тут.</p>
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} User Management App</p>
      </footer>
    </div>
  );
}

export default App;