import React from 'react';

const ValueItem = () => {
  const ValueNum = ['aaa', 'aaaa', 'aaaa'];
  return (
    <div>
      <ul className="mt-4">
        {ValueNum.map((value) => (
          <li className="bg-white p-2 mb-2 rounded-xl">
            仕事:{value} 人間関係:{value} 成長・健康{value} 余暇:{value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValueItem;
