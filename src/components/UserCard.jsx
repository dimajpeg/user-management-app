// src/components/UserCard.jsx
import React from 'react';

function UserCard({ name, email, age }) {
  return (
    <div className="user-card"> {/* Додамо клас для можливої стилізації */}
      <h3>Ім'я: {name}</h3>
      <p>Email: {email}</p>
      <p>Вік: {age}</p>
    </div>
  );
}

export default UserCard;