// src/components/Profile.jsx
import React, { useState } from 'react';

function Profile() {
  // Стан для визначення, чи видима інформація профілю
  const [isVisible, setIsVisible] = useState(true); // Початково інформація видима

  // Дані користувача (можна передавати через пропси, але для прикладу зробимо статичними тут)
  const userProfile = {
    name: "Анна Іваненко",
    email: "anna.ivanenko@example.com",
    bio: "Розробниця програмного забезпечення з 5-річним досвідом у веб-технологіях.",
    avatar: "https://i.pinimg.com/736x/71/81/14/7181149979b9cc345415d3b6465b192b.jpg" // URL для аватарки-заглушки
  };

  // Функція для перемикання видимості
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Змінюємо значення isVisible на протилежне
  };

  return (
    <div className="profile-container"> {/* Клас для можливої стилізації */}
      <h2>Профіль Користувача (Умовний рендеринг)</h2>
      <button onClick={toggleVisibility}>
        {isVisible ? "Приховати інформацію" : "Показати інформацію"}
      </button>

      {/* Умовний рендеринг інформації профілю */}
      {isVisible && (
        <div className="profile-info">
          <img src={userProfile.avatar} alt={`Аватар ${userProfile.name}`} className="profile-avatar"/>
          <h3>{userProfile.name}</h3>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <p><strong>Біографія:</strong> {userProfile.bio}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;