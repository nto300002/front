import React from 'react';
import TextArea from '../../layout/TextArea';
import SubmitButton from '../../layout/SubmitButton';
import Navigation from '../../layout/Navigation';

const GainForm = () => {
  const style = 'text-gray-500 text-sm mb-2';
  return (
    <div>
      <Navigation content="活力vs苦悩">
        <TextArea id="bad_idea" name="bad_idea">
          今日現れた嫌な考え
        </TextArea>
        <span className={style}>
          気持ちや身体の感覚、過去の記憶などでも良いです。
        </span>
        <p className="mb-5" />
        <TextArea id="vitality" name="vitality">
          その考えによってどのような活力が得られたか
        </TextArea>
        <span className={style}>
          嫌な思い出や気持ちがかえって生活に良い影響を与えた事はあるでしょうか？
          <br />
          例：先輩からバカにされ、過去のいじめの記憶が蘇ったが、「なにくそ！」と思い、いつもよりも早くタスクを終わらせることができた。
        </span>
        <p className="mb-5" />
        <TextArea id="suffering" name="suffering">
          その考えによってどのような苦しみがもたらされたか
        </TextArea>
        <span className={style}>
          嫌な思い出や気持ちが蘇った際に、実際の生活にも悪影響が及んだことはありますか?
          <br />
          例：先輩からバカにされ、気持ちが落ち込み、仕事を早退した。
        </span>
        <p className="mb-5" />
        <SubmitButton>回答する</SubmitButton>
      </Navigation>
    </div>
  );
};

export default GainForm;
