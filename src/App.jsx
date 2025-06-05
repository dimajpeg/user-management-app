// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserCard from './components/UserCard'; // Імпортуємо UserCard
// import './styles/App.css';

function App() {
  // Створимо кілька об'єктів з даними користувачів для прикладу
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
        <div className="user-list-container"> {/* Контейнер для карток */}
          {/* Відображаємо кілька UserCard з різними даними */}
          {/* 
            // Варіант 1: Вручну передаємо дані для кожної картки
            <UserCard name="Іван Петренко" email="ivan@example.com" age={30} />
            <UserCard name="Марія Сидоренко" email="maria@example.com" age={25} />
            <UserCard name="Олег Ковальчук" email="oleh@example.com" age={42} /> 
          */}

          {/* Варіант 2: Рендеримо картки з масиву даних usersData */}
          {usersData.map(user => (
            <UserCard
              key={user.id} // Ключ важливий при рендерингу списків!
              name={user.name}
              email={user.email}
              age={user.age}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;