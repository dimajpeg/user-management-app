// src/components/Counter.jsx
import React, { useState } from 'react'; 
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  // Функція для зменшення лічильника
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container"> {/* Клас для можливої стилізації */}
      <h2>Лічильник</h2>
      <p className="count-display">Поточне значення: {count}</p>
      <div className="buttons-container">
        <button onClick={decrement}>- (Зменшити)</button>
        <button onClick={increment}>+ (Збільшити)</button>
      </div>
    </div>
  );
}

export default Counter;