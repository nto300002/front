'use client';
import React, { useState } from 'react';

const ItemList = () => {
  const content = 'mb-4 text-gray-500';
  const h2 = 'text-xl border-b-2 text-gray-800';
  const [expanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      {' '}
      <ul className="bg-white rounded-md p-4">
        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? 'h-auto' : 'h-36'
          }`}
        >
          <li>
            <h2 className={h2}>今日現れた嫌な考え</h2>
          </li>
          <li className={content}>bad_idea</li>
          <li>
            <h2 className={h2}>それが活力をもたらしたもの</h2>
          </li>
          <li className={content}>vitality</li>
        </div>
        {expanded && (
          <>
            <li>
              <h2 className={h2}>それが苦しみをもたらしたもの</h2>
            </li>
            <li className={content}>suffering</li>
          </>
        )}
        <span className="text-blue-400">{expanded ? '' : '...'}</span>
      </ul>
      <span
        onClick={toggleContent}
        className="text-md text-blue-400 p-2 mt-2 hover:cursor-pointer"
      >
        {expanded ? '戻す' : '詳しく見る'}
      </span>
    </div>
  );
};

export default ItemList;
