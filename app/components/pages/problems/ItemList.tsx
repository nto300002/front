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
            <h2 className={h2}>今抱えている問題</h2>
          </li>
          <li className={content}>problem</li>
          <li>
            <h2 className={h2}>それが与えている影響</h2>
          </li>
          <li className={content}>affect</li>
        </div>
        {expanded && (
          <>
            <li>
              <h2 className={h2}>思考への没入</h2>
            </li>
            <li className={content}>thinking</li>
            <li>
              <h2 className={h2}>活力を奪う行為</h2>
            </li>
            <li className={content}>pointless_act</li>
            <li>
              <h2 className={h2}>感情との戦い</h2>
            </li>
            <li className={content}>resistance</li>
            <li>
              <h2 className={h2}>困難からの回避</h2>
            </li>
            <li className={content}>avoidance</li>
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
