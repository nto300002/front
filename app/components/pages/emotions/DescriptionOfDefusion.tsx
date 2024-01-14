import React from 'react';

const DescriptionOfDefusion = () => {
  const border = 'border-b-4 border-red-300';
  const textColor = 'text-red-500';
  return (
    <div className="mt-6 bg-white p-3">
      {' '}
      <h2 className="text-xl">
        <span className={border}>脱フュージョンとは</span>
      </h2>
      <div className="mt-5">
        <p>
          脱フュージョンとは、自分の<span className={border}>「心」</span>と
          <span className={border}>「マインド」</span>
          の距離を置くためのエクササイズです。
        </p>
        <p>
          これだけ聞いても何故それをする必要があるかわからないかもしれませんね。
        </p>
        <p>
          では、受験、就職、転職など、の人生において重要なイベントを思い返してみてください。
        </p>
        <br />
        <p>そのイベントの前に</p>
        <p className={`mb-3 ${textColor}`}>「失敗するんじゃないか」</p>
        <p className="mb-3">とか</p>
        <p className={textColor}>「もしだめだったら」</p>
        <p>というような考えが、頭を支配していることはないでしょうか？</p>
        <br />
        <p>
          <span className={border}>それが「マインド」です。</span>
        </p>
        <br />
        <p>その際に現れた「マインド」に従って行動を起こすと、</p>
        <p className={textColor}>「失敗するくらいならやめておこう」</p>
        <p>となり、行動できずに終わってしまいます。</p>
        <br />
        <p>
          これが、マインドと心が結びついた状態で、
          <span className={border}>「フュージョン状態」</span>と呼びます。
        </p>
        <br />
        <p>
          人間には元々、生存のためにネガティブな考えを発達させて来ましたが、「より人間らしく」生きるためには、
        </p>
        <p>
          「マインド」ではなく、私達の「心」が決めた直感を信じることも重要です。
        </p>
        <p>
          そこで、ネガティブなマインドに支配されないために、
          <span className={`${border} ${textColor} text-xl`}>
            「脱フュージョン」
          </span>
          というエクササイズを行います。
        </p>
        <p>
          ここでは、マインドそのものを否定するのではなく、
          <span className={textColor}>
            「より自分らしく生きるために有用か」
          </span>
          という観点で考えます。
        </p>
        <br />
        <p>
          人生において障害になっているものは、「ありがとう、今は休んでいてね」というように、優しく距離を置いてみましょう。
        </p>
        <br />
      </div>
    </div>
  );
};

export default DescriptionOfDefusion;
