'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import LikeButton from '@/app/components/layout/LikeButton';
import Link from 'next/link';
import EditButton from '@/app/components/layout/EditButton';
import DeleteButton from '@/app/components/layout/DeleteButton';
import { fetchTests } from '@/app/api/emotions';

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

  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    const fetchData = async () => {
      const testsData = await fetchTests();
      setTests(testsData);
    };

    fetchData();
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
            className="bg-red-50 mt-6 ml-20 w-40 h-56 shadow-md"
            key={test.id}
          >
            <Link href={`/emotions/${test.id}`}>
              <Image
                src="/sample.png"
                alt="sample-image"
                width={300}
                height={200}
              />
              {test.title}
            </Link>
            <span className="text-right">
              <LikeButton />
            </span>
            <div id="#own" className="group relative">
              <div className="flex p-4 absolute top-5 left-24">
                <Link href={`/emotions/${test.id}/edit`}>
                  <EditButton />
                </Link>
                <DeleteButton />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Emotion;
