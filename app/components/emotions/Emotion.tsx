'use client';
import React, { useEffect, useState } from 'react';

type Test = {
  id: number;
  title: string;
};

const Emotion = () => {
  const [tests, setTests] = useState<Test[]>([]);

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const fetchTests = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tests`);
      if (!response.ok) {
        throw new Error('データの取得に失敗しました');
      }
      const data = await response.json();
      setTests(data);
      console.log(tests);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchTests();
  }, []);

  return (
    <div>
      <div className="flex text-white">
        <p
          className={`pl-3 pr-3 cursor-pointer ${
            isClicked ? 'bg-red-400 shadow-xl text-lg' : 'bg-red-700'
          }`}
          onClick={handleClick}
        >
          自分
        </p>
        <p
          className={`pl-3 pr-3 cursor-pointer ${
            isClicked ? 'bg-red-700' : 'bg-red-400 shadow-xl text-lg'
          }`}
          onClick={handleClick}
        >
          他のユーザー
        </p>
      </div>
      <h1 className="text-2xl p-4 bg-white border-b-4 border-red-300">
        みんなの感情
      </h1>
      <ul className="flex flex-wrap">
        {tests.map((test) => (
          <li
            className="bg-red-50 mt-6 ml-20 w-40 h-48 rounded-2xl border-red-300 border-2 shadow-md"
            key={test.id}
          >
            {test.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Emotion;
