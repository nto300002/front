'use client';
import React, { useState } from 'react';
import SubmitButton from '../layout/SubmitButton';
import EmotionFormInput from './EmotionFormInput';
import EmotionFormTextArea from './EmotionFormTextArea';
import EmotionFormBodyParts from './EmotionFormBodyParts';
import EmotionFormInputFile from './EmotionFormInputFile';
import EmotionFormInputAIImage from './EmotionFormInputAIImage';

const EmotionFormNew = () => {
  const [isAiInput, setIsAiInput] = useState(false);
  return (
    <div className="text-left">
      <h1 className="text-3xl mb-5">感情を吐き出す</h1>
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
            <EmotionFormInputAIImage id="image" name="image" />
            <span
              className="hover:text-blue-300"
              onClick={() => setIsAiInput(!isAiInput)}
            >
              画像を投稿する▶
            </span>
          </div>
        )}
        <SubmitButton>投稿</SubmitButton>
      </div>
    </div>
  );
};

export default EmotionFormNew;
