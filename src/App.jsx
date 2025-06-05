// src/App.jsx
import React from 'react';

// Імпорти створених компонентів
import Header from './components/Header';
import Footer from './components/Footer';
import UserCard from './components/UserCard';
import Counter from './components/Counter';
import Timer from './components/Timer';
import ButtonClick from './components/ButtonClick';
import SimpleForm from './components/SimpleForm';
import ToDoList from './components/ToDoList'; // ToDoList з пункту 9
import Profile from './components/Profile';   // Profile з пункту 10

// Якщо ти створив src/styles/App.css і хочеш його використовувати:
import './styles/App.css'; 
// Або якщо ти закоментував цей рядок раніше через помилку,
// переконайся, що файл src/styles/App.css існує, або залиш закоментованим.

function App() {
  // Дані для UserCard (з пункту 4)
  const usersData = [
    { id: 1, name: "Іван Петренко", email: "ivan@example.com", age: 30 },
    { id: 2, name: "Марія Сидоренко", email: "maria@example.com", age: 25 },
    { id: 3, name: "Олег Ковальчук", email: "oleh@example.com", age: 42 }
  ];

  return (
    <div className="app-container">
      <Header /> {/* Компонент з пункту 3 */}

      <main className="app-main-content">
        {/* Компонент UserCard та дані з пункту 4 */}
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
        <Counter /> {/* Компонент з пункту 5 (useState) */}

        <hr style={{ margin: '20px 0' }} />
        <Timer /> {/* Компонент з пункту 6 (useEffect) */}

        <hr style={{ margin: '20px 0' }} />
        <ButtonClick /> {/* Компонент з пункту 7 (Обробка подій) */}

        <hr style={{ margin: '20px 0' }} />
        <SimpleForm /> {/* Компонент з пункту 8 (Форми) */}

        <hr style={{ margin: '20px 0' }} />
        <ToDoList /> {/* Компонент з пункту 9 (Рендеринг списків) */}

        <hr style={{ margin: '20px 0' }} />
        <Profile /> {/* Компонент з пункту 10 (Умовний рендеринг) */}
      </main>

      <Footer /> {/* Компонент з пункту 3 */}
    </div>
  );
}

export default App;