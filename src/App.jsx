// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserCard from './components/UserCard';
import Counter from './components/Counter';
import Timer from './components/Timer';
import ButtonClick from './components/ButtonClick'; // Імпортуємо ButtonClick
 import './styles/App.css';

function App() {
  const usersData = [
    { id: 1, name: "Іван Петренко", email: "ivan@example.com", age: 30 },
    { id: 2, name: "Марія Сидоренко", email: "maria@example.com", age: 25 },
    { id: 3, name: "Олег Ковальчук", email: "oleh@example.com", age: 42 }
  ];

  return (
    <div className="app-container">
      <Header />

      <main className="app-main-content">
        <h2>Список користувачів (приклад з UserCard)</h2>
        <div className="user-list-container">
          {usersData.map(user => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              age={user.age}
            />
          ))}
        </div>

        <hr style={{ margin: '20px 0' }} />
        <Counter />
        <hr style={{ margin: '20px 0' }} />
        <Timer />
        <hr style={{ margin: '20px 0' }} /> {/* Ще один роздільник */}

        <ButtonClick /> {/* Додаємо компонент для демонстрації обробки подій */}

      </main>

      <Footer />
    </div>
  );
}

export default App;