import React from 'react';
import TextArea from '../../layout/TextArea';
import SubmitButton from '../../layout/SubmitButton';

const DotsForm = () => {
  const style = 'text-gray-500 text-sm mb-2';
  return (
    <div>
      <div className="flex mb-5">
        <div className="flex-col">
          <TextArea id="feeling" name="feeling">
            感覚
          </TextArea>
          <span className={style}>気持ち、感覚、衝動</span>
        </div>
        <p className="mr-24" />
        <div className="flex-col">
          <TextArea id="mind" name="mind">
            マインド
          </TextArea>
          <span className={style}>考え、記憶、信念、不安</span>
        </div>
      </div>
      <TextArea id="distraction" name="distraction">
        気を紛らす(Distraction)
      </TextArea>
      <span className={style}>
        上記をどのように紛らわそうとしましたか(テレビ、ゲーム、スマホなど)
      </span>
      <p className="mb-5" />
      <TextArea id="opting_out" name="opting_out">
        離れる(Opting Out)
      </TextArea>
      <span className={style}>
        嫌な気持ちを呼び起こす、どんな人、場所、物事から離れたくなりますか？
      </span>
      <p className="mb-5" />
      <TextArea id="thinking" name="thinking">
        考える(Thinking)
      </TextArea>
      <span className={style}>
        嫌な気持ちから抜け出す際にどのように考えたか(他人を責める、心配する、過去を蒸し返す、自分を批判、理解しようとする、計画を立てる、前向きに考える)
      </span>
      <p className="mb-5" />
      <TextArea id="substances" name="substances">
        物質依存など(Substances)
      </TextArea>
      <span className={style}>
        嫌な気持ちから抜け出す際にどのような物質を接種したか(食べ物、薬、過度な睡眠){' '}
      </span>
      <p className="mb-5" />
      <SubmitButton>回答する</SubmitButton>
    </div>
  );
};

export default DotsForm;
