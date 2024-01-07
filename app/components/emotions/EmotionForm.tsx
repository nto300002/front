'use client';
import React, { useState } from 'react';
import EmotionFormInput from './EmotionFormInput';
import EmotionFormTextArea from './EmotionFormTextArea';
import EmotionFormBodyParts from './EmotionFormBodyParts';
import EmotionFormInputFile from './EmotionFormInputFile';

const EmotionForm = () => {
  const [isAiInput, setIsAiInput] = useState(false);
  return (
    <div className="text-gray-500">
      <EmotionFormInput id="email" name="email">
        今どんな気持ち？
      </EmotionFormInput>
      <EmotionFormInput id="email" name="email">
        それを名付けるなら
      </EmotionFormInput>
      <EmotionFormTextArea id="email" name="email">
        どのような体験によりそう感じたか
      </EmotionFormTextArea>
      <EmotionFormBodyParts />
      {isAiInput ? (
        <>
          <EmotionFormInputFile id="image" name="image">
            イメージ画像
          </EmotionFormInputFile>
          <span
            className="hover:text-blue-300"
            onClick={() => setIsAiInput(!isAiInput)}
          >
            AIによる画像生成▶
          </span>
        </>
      ) : (
        <div className="text-base">
          <p className="mr-5">AIによる画像生成</p>
          <input
            type="text"
            id="image"
            name="image"
            className="border-gray-400 border-b-2 w-full"
          />
          <span
            className="hover:text-blue-300"
            onClick={() => setIsAiInput(!isAiInput)}
          >
            画像を投稿する▶
          </span>
        </div>
      )}
    </div>
  );
};

export default EmotionForm;
