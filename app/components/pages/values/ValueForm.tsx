'use client';
import React from 'react';
import { InputForm } from '../../layout/InputForm';
import { InputRangeForm } from '../../layout/InputForm';
import SubmitButton from '../../layout/SubmitButton';
import Navigation from '../../layout/Navigation';
import { Graph } from './Graph';

const ValueForm = () => {
  return (
    <div>
      <Navigation content="あなたの価値">
        <InputForm id="job" name="job" type="text">
          仕事
        </InputForm>
        <InputForm id="human_relations" name="human_relations" type="text">
          人間関係
        </InputForm>
        <InputForm id="growth" name="growth" type="text">
          成長・健康
        </InputForm>
        <InputForm id="leisure_time" name="leisure_time" type="text">
          余暇
        </InputForm>
        <SubmitButton>回答する</SubmitButton>
      </Navigation>
      <div className="mt-6 border-2 border-gray-300 p-4 mb-4 text-center rounded-xl bg-white">
        <h1 className="text-xl text-gray-600 mb-2">
          <span className="border-b-2 border-gray-400 ">仕事</span>
        </h1>
        <p className="mb-4 text-gray-700">
          TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT
        </p>
        <h1 className="text-xl text-gray-600 mb-2">
          <span className="border-b-2 border-gray-400 ">人間関係</span>
        </h1>
        <p className="mb-4 text-gray-700">
          TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT
        </p>
        <h1 className="text-xl text-gray-600 mb-2">
          <span className="border-b-2 border-gray-400 ">成長・健康</span>
        </h1>
        <p className="mb-4 text-gray-700">
          TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT
        </p>
        <h1 className="text-xl text-gray-600 mb-2">
          <span className="border-b-2 border-gray-400 ">余暇</span>
        </h1>
        <p className="mb-4 text-gray-700">
          TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT
        </p>
      </div>

      <Navigation content="価値観に沿った生活ができたか">
        <h1 className="text-xl">価値観に沿った生活ができたかチェック</h1>

        <InputRangeForm
          id="job_num"
          name="job_num"
          type="range"
          min={1}
          max={10}
        >
          今日の評価：仕事
        </InputRangeForm>
        <InputRangeForm
          id="human_relations_num"
          name="human_relations_num"
          type="range"
          min={1}
          max={10}
        >
          今日の評価：人間関係
        </InputRangeForm>
        <InputRangeForm
          id="growth_num"
          name="growth_num"
          type="range"
          min={1}
          max={10}
        >
          今日の評価：成長・体調
        </InputRangeForm>
        <InputRangeForm
          id="leisure_time_num"
          name="leisure_time_num"
          type="range"
          min={1}
          max={10}
        >
          今日の評価：余暇時間
        </InputRangeForm>
        <SubmitButton>回答する</SubmitButton>
      </Navigation>
    </div>
  );
};

export default ValueForm;
