// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserCard from './components/UserCard';
import Counter from './components/Counter';
import Timer from './components/Timer';
import ButtonClick from './components/ButtonClick';
import SimpleForm from './components/SimpleForm'; // Імпортуємо SimpleForm
// import './styles/App.css';

function App() {
  const usersData = [

  ];

  return (
    <div className="app-container">
      <Header />

      <main className="app-main-content">
        {/* ... (UserCard, Counter, Timer, ButtonClick залишаються без змін) ... */}
        <hr style={{ margin: '20px 0' }} />
        <Counter />
        <hr style={{ margin: '20px 0' }} />
        <Timer />
        <hr style={{ margin: '20px 0' }} />
        <ButtonClick />
        <hr style={{ margin: '20px 0' }} /> {/* Ще один роздільник */}

        <SimpleForm /> {/* Додаємо компонент форми */}
      </main>

      <Footer />
    </div>
  );
}

export default App;