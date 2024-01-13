import React from 'react';
import TextArea from '../../layout/TextArea';
import SubmitButton from '../../layout/SubmitButton';
import NavigationInfo from '../../layout/HiddenItem';

const ProblemForm = () => {
  const style = 'text-gray-500 text-sm mb-2';
  return (
    <div className="">
      <TextArea id="problem" name="problem">
        今抱えている問題
      </TextArea>
      <span className={style}>
        あなたは今何に悩んでいるか、一番大きな問題を教えてください
      </span>
      <div className="mb-5" />
      <TextArea id="affect" name="affect">
        それが与えている影響
      </TextArea>
      <span className={style}>その問題があるおかげで何に困っていますか</span>
      <div className="mb-5" />
      <TextArea id="thinking" name="thinking">
        思考への没入
      </TextArea>
      <span className={style}>
        常に頭に浮かんでいる考え
        過去の記憶や不安、恐れ、自己批判など、些細なことでもいいので教えてください
      </span>
      <div className="mb-5" />
      <TextArea id="pointless_act" name="pointless_act">
        活力を奪う行為
      </TextArea>
      <span className={style}>
        目の前の快楽のために長い目で見た際の人生の質を悪化させてしまう行為のことです。
        例：酒、ギャンブル、スマホなどの依存症
      </span>
      <div className="mb-5" />
      <TextArea id="resistance" name="resistance">
        抵抗したい感情
      </TextArea>
      <span className={style}>
        激しい怒りや悲しみが起きたとき、なんとかぐっとこらえてしまったり、そこまでではなくても、なんとなくモヤモヤして取り除きたいと思った感情のことです。今抱えている問題に関係するものを挙げてください。
      </span>
      <div className="mb-5" />
      <TextArea id="avoidance" name="avoidance">
        回避してしまったこと(先延ばしなど)
      </TextArea>
      <span className={style}>
        あなたが、なんとなく嫌で避けてしまっている事や、人、場所などを教えてください。例：先延ばし
      </span>
      <div className="mb-5" />
      <SubmitButton>回答する</SubmitButton>
    </div>
  );
};

export default ProblemForm;
