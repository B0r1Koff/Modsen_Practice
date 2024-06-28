import React, { useState } from 'react';
import { Message } from '../Message';

export function InputNumber() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  function messageCheck(){
    if(Number(value) > 0) return "Число положительное"
    if(Number(value) < 0) return "Число отрицательное"
    return ""
  };

  return (
    <div>
      <label htmlFor="number">Введите число:</label>
      <input type="number" id="number" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => setMessage(messageCheck())}>Отправить</button>
      <Message message={message}/>
    </div>
  );
}


