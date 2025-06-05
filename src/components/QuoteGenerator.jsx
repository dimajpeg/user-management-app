// src/components/QuoteGenerator.jsx
import React, { useState } from 'react';

const quotes = [
  "Життя – це те, що з тобою відбувається, поки ти будуєш плани. – Джон Леннон",
  "Єдиний спосіб робити великі справи – любити те, що ти робиш. – Стів Джобс",
  "Неважливо, як повільно ти йдеш, доки ти не зупиняєшся. – Конфуцій",
  "Найкращий час, щоб посадити дерево, був 20 років тому. Другий найкращий час – сьогодні. – Китайське прислів'я",
  "Успіх – це не ключ до щастя. Щастя – це ключ до успіху. – Альберт Швейцер",
  "Вірте в себе, навіть якщо ніхто інший не вірить. – Елон Маск",
  "Через двадцять років ви більше шкодуватимете про те, чого не зробили, ніж про те, що зробили. – Марк Твен"
];

function QuoteGenerator() {
  // Стан для зберігання поточної відображеної цитати
  // Початково вибираємо випадкову цитату
  const [currentQuote, setCurrentQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  // Функція для вибору та встановлення нової випадкової цитати
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-generator-container"> {/* Клас для можливої стилізації */}
      <h2>Генератор Випадкових Цитат</h2>
      <blockquote className="quote-display">
        <p>"{currentQuote}"</p>
      </blockquote>
      <button onClick={getRandomQuote}>Отримати іншу цитату</button>
    </div>
  );
}

export default QuoteGenerator;