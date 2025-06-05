// src/components/ButtonClick.jsx
import React, { useState } from 'react';

function ButtonClick() {
  // Стан для зберігання тексту, який буде змінюватися
  const [message, setMessage] = useState("Натисни на кнопку!");

  // Функція-обробник події кліку по кнопці
  const handleClick = () => {
    // Змінюємо повідомлення на нове
    setMessage("Кнопку було натиснуто! Текст змінився.");
    
    //     ? "Кнопку було натиснуто! Текст змінився." 
  };

  return (
    <div className="button-click-container"> {/* Клас для можливої стилізації */}
      <h2>Обробка події кліку</h2>
      <p className="message-display">{message}</p>
      <button onClick={handleClick}>Натисни мене</button>
    </div>
  );
}

export default ButtonClick;