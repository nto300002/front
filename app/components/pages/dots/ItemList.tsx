'use client';
import React, { useState } from 'react';

const ItemListDots = () => {
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
            <h2 className={h2}>気持ち、感覚、衝動</h2>
          </li>
          <li className={content}>feeling</li>
          <li>
            <h2 className={h2}>マインド</h2>
          </li>
          <li className={content}>mind</li>
        </div>
        {expanded && (
          <>
            <li>
              <h2 className={h2}>気を紛らす(Distraction)</h2>
            </li>
            <li className={content}>distraction</li>
            <li>
              <h2 className={h2}>離れる</h2>
            </li>
            <li className={content}>opting_out</li>
            <li>
              <h2 className={h2}>考える</h2>
            </li>
            <li className={content}>thinking</li>
            <li>
              <h2 className={h2}>物質依存などの依存</h2>
            </li>
            <li className={content}>substances</li>
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

export default ItemListDots;
