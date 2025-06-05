// src/components/SimpleForm.jsx
import React, { useState } from 'react';

function SimpleForm() {
  // Стан для зберігання тексту, введеного в інпут
  const [inputValue, setInputValue] = useState("");
  // Стан для зберігання тексту, який буде відображено після натискання кнопки
  const [displayedText, setDisplayedText] = useState("");

  // Обробник зміни значення в інпуті
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Оновлюємо стан inputValue при кожному введенні символу
  };

  // Обробник відправки форми (натискання кнопки)
  const handleSubmit = (event) => {
    event.preventDefault(); // Запобігаємо стандартній поведінці форми (перезавантаженню сторінки)
    setDisplayedText(inputValue); // Встановлюємо текст для відображення
    // setInputValue(""); // Опціонально: очистити інпут після відправки
  };

  return (
    <div className="simple-form-container"> {/* Клас для можливої стилізації */}
      <h2>Проста Форма</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue} // Значення інпута прив'язане до стану inputValue
          onChange={handleInputChange} // Обробник зміни значення
          placeholder="Введіть текст тут..."
        />
        <button type="submit">Показати текст</button>
      </form>
      {/* Відображаємо текст, якщо він є */}
      {displayedText && (
        <div className="displayed-text-container">
          <h3>Введений текст:</h3>
          <p>{displayedText}</p>
        </div>
      )}
    </div>
  );
}

export default SimpleForm;