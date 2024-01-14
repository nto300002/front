import React from 'react';

const OpenYourMindOfDefusion = () => {
  const border = 'border-b-4 border-red-300';
  const textColor = 'text-red-500';
  return (
    <div className="bg-white p-2">
      <h2 className="text-xl">
        <span className={border}>心をオープンにするエクササイズ</span>
      </h2>
      <div className="mt-5">
        <p>
          心をオープンにするエクササイズとは、
          <br />
          つらさ、苦しみを受け入れるためのエクササイズです。
        </p>
        <br />
        <p>
          <span className={textColor}>つらさを受け入れないと、</span>
          例えば毎日、つらさから逃げるために酒を飲むといった回避行動
          <br />
          などに繋がってしまう可能性があります。
        </p>
        <br />
        <p>
          上記でマインドについて解説しましたが、何かにつけ、
          <br />
          過去の苦しい記憶を呼び覚ましたりして、振り回してくるのがマインドです。
        </p>
        <br />
        <p>
          悪者のように聞こえますが、悔しい思いをしてから、
          <br />
          なんとか踏ん張って努力して、その雪辱を晴らすといった行動がとれるのもマインドのおかげです。
        </p>
        <br />
        <p>
          マインドを理解し、友だちになることで、嫌な気持ちにさせたい友だちのマインドくんをたしなめ、
          <br />
          良き隣人として過ごすことができれば、心が軽くなるでしょう。
        </p>
        <br />
      </div>
    </div>
  );
};

export default OpenYourMindOfDefusion;
