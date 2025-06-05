// src/components/Timer.jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date()); // Оновлюємо стан currentTime кожну секунду
    }, 1000); // 1000 мілісекунд = 1 секунда
    return () => {
      clearInterval(timerId); // 
    };
  }, []); 

  return (
    <div className="timer-container"> {/* Клас для можливої стилізації */}
      <h2>Поточний час</h2>
      <p className="time-display">{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default Timer;