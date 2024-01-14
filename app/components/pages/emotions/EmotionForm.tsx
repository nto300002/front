'use client';
import React, { useState } from 'react';
import { InputForm } from '../../layout/InputForm';
import EmotionFormBodyParts from './EmotionFormBodyParts';
import TextArea from '../../layout/TextArea';
import SubmitButton from '../../layout/SubmitButton';
import Image from 'next/image';

const EmotionForm = () => {
  const [isAiInput, setIsAiInput] = useState(false);
  return (
    <div className="text-gray-500">
      <InputForm id="state_of_mind" name="state_of_mind" type="text">
        私は〇〇だ(俯瞰したい気持ち)
      </InputForm>
      <InputForm id="heart_name" name="heart_name" type="text">
        それを名付けるなら
      </InputForm>
      <h2>今の気持ち</h2>
      <ul className="flex flex-wrap">
        <li className="hover:cursor-pointer">
          <Image src="/tanoshimi.jpg" alt="楽しい" width={200} height={200} />
          <input type="radio" id="mood_image" name="mood_image" value={0} />
          <label htmlFor="mood_image">楽しい</label>
        </li>
        <li className="hover:cursor-pointer">
          <Image src="/yorokobi.jpg" alt="喜び" width={200} height={200} />
          <input type="radio" id="mood_image" name="mood_image" value={1} />
          <label htmlFor="mood_image">喜び</label>
        </li>
        <li className="hover:cursor-pointer">
          <Image src="/nayami.jpg" alt="悩み" width={200} height={200} />
          <input type="radio" id="mood_image" name="mood_image" value={2} />
          <label htmlFor="mood_image">悩み</label>
        </li>
        <li className="hover:cursor-pointer">
          <Image src="/kanashimi.jpg" alt="悲しみ" width={200} height={200} />
          <input type="radio" id="mood_image" name="mood_image" value={3} />
          <label htmlFor="mood_image">悲しみ</label>
        </li>
        <li className="hover:cursor-pointer">
          <Image src="/angry.jpg" alt="怒り" width={200} height={300} />
          <input type="radio" id="mood_image" name="mood_image" value={4} />
          <label htmlFor="mood_image">怒り</label>
        </li>
      </ul>
      {isAiInput ? (
        <div className="text-base">
          <p
            className="mr-5 hover:text-blue-300 hover:cursor-pointer"
            onClick={() => setIsAiInput(!isAiInput)}
          >
            AIによる画像生成
          </p>
          <TextArea id="emotional_forms" name="emotional_forms">
            あなたの感情に形を与える・意識する
          </TextArea>
        </div>
      ) : (
        <>
          <span
            className="hover:text-blue-300 hover:cursor-pointer"
            onClick={() => setIsAiInput(!isAiInput)}
          >
            AIによる画像生成▶
          </span>
        </>
      )}
      <p className="mb-6" />
      <SubmitButton>回答する</SubmitButton>
    </div>
  );
};

export default EmotionForm;
