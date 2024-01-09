'use client';
import DeleteButton from '@/app/components/layout/DeleteButton';
import EditButton from '@/app/components/layout/EditButton';
import MainContent from '@/app/components/layout/MainContent';
import SubmitButton from '@/app/components/layout/SubmitButton';
import FiveWs from '@/app/components/questions/FiveWs';
import QuestionForm from '@/app/components/questions/QuestionForm';
import Link from 'next/link';
import { useState } from 'react';

export default function Emotion({ params }: { params: { id: number } }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <MainContent>
      <div className="flex flex-col">
        <FiveWs />
        <div className="flex mx-auto">
          <div className="pt-4 pb-4 pr-12 pl-12 border-2 rounded-md text-center">
            <h1>
              記記事の詳細記事の詳細記事の詳細記事の詳細記事の詳細記事の詳細事の詳細
            </h1>
            <p>記事のスラッグ: {params.id}</p>
          </div>
          <div className="mr-auto">
            <Link href={`/emotions/${params.id}/edit`}>
              <EditButton />
            </Link>
            <DeleteButton />
          </div>
        </div>
        <ul className="flex items-center text-center mx-auto">
          <li className="text-red-600 mt-6 mb-6 p-4 border-2 rounded-md">
            なぜ
          </li>
          <li className="text-red-600 mt-6 mb-6 p-4 border-2 rounded-md">
            これはテストです
          </li>
          <li>
            <EditButton />
          </li>
          <li>
            <DeleteButton />
          </li>
        </ul>
        <SubmitButton>
          <span onClick={() => setIsClicked(!isClicked)}>質問の追加</span>
        </SubmitButton>
        {isClicked ? (
          <div className="mt-6">
            <QuestionForm />
          </div>
        ) : (
          <></>
        )}
      </div>
    </MainContent>
  );
}
