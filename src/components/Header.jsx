// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="app-header">
      <h1>Система Обліку Користувачів</h1>
      <nav className="app-nav">
        <ul>
          <li><a href="#">Головна</a></li>
          <li><a href="#">Список користувачів</a></li>
          <li><a href="#">Додати користувача</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;