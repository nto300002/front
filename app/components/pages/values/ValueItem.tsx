import React from 'react';

const ValueItem = () => {
  const ValueNum = [
    { id: 1, title: 'aaa' },
    { id: 2, title: 'aaaa' },
    { id: 3, title: 'aaaa' },
  ];
  return (
    <div>
      <ul className="mt-4">
        {ValueNum.map((value) => (
          <li className="bg-white p-2 mb-2 rounded-xl" key={value.id}>
            仕事:{value.title} 人間関係:{value.title} 成長・健康{value.title}{' '}
            余暇:{value.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValueItem;
