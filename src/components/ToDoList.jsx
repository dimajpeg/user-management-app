// src/components/ToDoList.jsx
import React, { useState } from 'react';

function ToDoList() {
  // Стан для зберігання списку завдань.
  // Ініціалізуємо кількома прикладами завдань.
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Вивчити основи React' },
    { id: 2, text: 'Зрозуміти пропси та стан' },
    { id: 3, text: 'Практикуватися з хуками' },
    { id: 4, text: 'Завершити лабораторну роботу' }
  ]);

  return (
    <div className="todo-list-container"> {/* Клас для можливої стилізації */}
      <h2>Список Завдань (Рендеринг списку)</h2>
      {tasks.length > 0 ? (
        <ul>
          {/* Використовуємо метод map для ітерації по масиву tasks 
              і створення <li> для кожного завдання */}
          {tasks.map(task => (
            <li key={task.id} className="todo-list-item">
              {task.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>Немає завдань для відображення.</p>
      )}
    </div>
  );
}

export default ToDoList;