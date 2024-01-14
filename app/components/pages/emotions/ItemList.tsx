'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const ItemList = () => {
  const content = 'mb-4 text-gray-500';
  const h2 = 'text-xl mb-4 text-gray-800 border-b-2';
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
            expanded ? 'h-auto' : 'h-28'
          }`}
        >
          <li>
            <h2 className={h2}>私は{`state_of_mind`}と思っています。</h2>
            <p className="text-left text-sm hover:cursor-pointer mr-auto text-blue-400">
              読み上げ
            </p>
            <span className={content}>
              私は〇〇と思っている、と考えることで、感情と思考を切り離し、俯瞰してみることができます。
            </span>
            <br />
            <span className={content}>
              さらに、音楽や、色々な音程で読み上げることで、それらを悲しい、苦しいといったものから、楽しいという感情に変化させることができます。
            </span>
          </li>
          <li>
            <h2 className={h2}>その感情の名前は{`heart_name`}です。</h2>
          </li>
        </div>
        {expanded && (
          <>
            <li>
              <h2 className={h2}>あなたの今の感情</h2>
              <Image src="/angry.jpg" alt="サンプル" width={300} height={300} />
            </li>
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
