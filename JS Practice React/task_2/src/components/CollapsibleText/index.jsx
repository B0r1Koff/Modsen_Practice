import React, { useState } from 'react';

export function CollapsibleText({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      {isExpanded ? text : text.split('.')[0] + '.'}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Свернуть' : 'Показать подробнее'}
      </button>
    </div>
  );
}

