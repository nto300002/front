'use client';
import React, { useEffect, useState } from 'react';
import Navigation from '../../layout/Navigation';

const Top = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div className="mb-24">
        <p className="text-gray-600 text-xl mt-6">
          いま人生が思い通りに行かず苦しんでいる人へ
        </p>
        <p className="text-gray-600 text-xl mt-6 mb-6">
          運動をする前にストレッチを行うように、心にもストレッチが必要です
          実践してみませんか?
        </p>
      </div>
      <h1 className="text-2xl text-gray-600 border-b-2 border-gray-400">
        catharsisってどういうアプリなの?
      </h1>
      <p className="mt-6">
        心理療法ACTを使って、心の問題とあなたがなりたい自分になるための価値を洗い出し、心の問題を受け止めた上で、本当にやりたかったことを目指せるようになるためのお手伝いをするアプリです。
      </p>
      <p
        className="mt-4 text-red-500 hover:cursor-pointer hover:text-red-700"
        onClick={() => setIsClicked(!isClicked)}
      >
        ACTってなに？
      </p>
      {isClicked ? (
        <>
          <div className="text-gray-800 p-6 right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-left">
            <h1>ACTとは</h1>
            <p>Acceptance and Commitment Therapyの頭文字です。</p>
            <h2>
              Acceptance:
              アクセプタンスとは、痛みや苦しみを感じたときにそれを受け入れる場所を作るということです。その方法は心をオープンにするエクササイズのセクションで扱います。
            </h2>
            <p>
              ACTは心理療法の一種で、その目的は心の柔軟性にあります。
              <br />
              その目的は、
              <span className="text-red-500">「心をオープン」</span>にし、
              <span className="text-red-500">
                「より価値のある人生のため、必要なことだけ」
              </span>
              を行い、常に<span className="text-red-500">「今、この瞬間」</span>
              を意識することにあります。
            </p>
            <br />
            <p>
              心をオープンにするとは、痛みを受け入れる(Acceptance)ことで、ネガティブな過去からも気付きを得ることができます。
            </p>
            <br />
            <p>
              必要なことだけを行うということは、ネガティブな感情によって生じる行動(例えば、先延ばし癖など)を最小限にし、自分の価値に沿って生きるために必要です。
            </p>
            <br />
            <p>
              今、この瞬間を意識するということは、過去や未来というのは不変であり、それを嘆いていても現状が改善するわけではないので、現在にのみ焦点を当てようというものです。
              <br />
              その際に、マインドという自分の思考が、過去や未来について思いを巡らせてしまいがちなため、忘れがちな感情、感覚というものをゆっくりと感じ取ることが大事です。
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
      <p className="mb-12" />
      <br />
      <Navigation content="価値の的">
        <span className="text-blue-400 hover:cursor-pointer">
          エクササイズはこちら
        </span>
        <p>価値とは</p>
        <br />
        <ul className="mb-6">
          <li>
            <span className="border-b-4 border-red-300">継続的な行動</span>
          </li>
          <li>
            <span className="border-b-4 border-red-300">全体的な性質</span>
          </li>
          <li>
            <span className="border-b-4 border-red-300">
              望ましいものである
            </span>
          </li>
        </ul>
        という特徴を持っています。
        <br />
        <p className="mt-6 mb-4">
          <span className="text-red-700">継続的な行動</span>
          <br />
          とは、人生における方向性のようなもので、「〜でいたい！」というようなものです。
          <br />
          目標がその対義語です。目標には期限がありますが、価値にはありません。
          <br />
          <span className="text-gray-400">
            例：何かを創造していきたい！、家族を幸せにしていきたい！、困っている人を救いたい！
          </span>
        </p>
        <p className="mt-4">
          <span className="text-red-700">全体的な性質</span>
          <br />
          価値とは、抽象的な表現になります。
          <br />
          曖昧ではありますが、具体的にしすぎると視野を狭めることに繋がりかねないので、価値を決める際はやんわりとしたもので大丈夫です。
          <br />
          <span className="text-gray-400">
            具体的すぎる例:野球がしたい、パン屋さんで働きたい。
          </span>
        </p>
        <p className="mt-4">
          <span className="text-red-700">望ましいもの</span>
          <br />
          とは、「したいこと」であるということです。
          <br />
          ネガティブなニュアンスの言葉は控えたほうが良いです。
          <br />
          <span className="text-gray-400">
            例：〜しなくてはならない、〜をやめたい、〜したくない、〜を消したい
          </span>
        </p>
      </Navigation>
      <br />
      <Navigation content="問題と価値">
        <span className="text-blue-400 hover:cursor-pointer">
          エクササイズはこちら
        </span>
        <h1>
          苦悩を減らし、豊かな生活を送るために、問題のある思考と価値を知ることが重要です。
        </h1>
        <ul className="mt-4">
          <li>
            <h2 className="border-b-4 border-red-300">悩みと苦しみ</h2>
          </li>
          <li>問題のある感情</li>
          <li>問題のある行為</li>
          <br />
        </ul>
      </Navigation>
      <br />
      <Navigation content="活力vs苦悩">
        <span className="text-blue-400 hover:cursor-pointer">
          エクササイズはこちら
        </span>
        <p>
          あなたにとっての
          <span className="border-b-4 border-red-300">
            ネガティブな感情やそこから生じる行動
          </span>
          というのは、あなたの活動の邪魔になっているかもしれませんが、同時に、あなたの
          <span className="text-red-500">利益</span>になっていることもあります。
        </p>
        <br />
        <p>
          例えば、先延ばし癖の場合は、失敗を恐れるあまり、
          重要な課題に取り組むのを避けている場合があります。
        </p>
        <p>
          それは、<span className="text-red-500">失敗して傷つく</span>
          よりも、問題を
          <span className="text-red-500">見て 見ぬ振りをするほうが大事</span>
          だと 無意識に判断してしまっている のかもしれません。それが
          <span className="border-b-4 border-red-300">
            先延ばし行為の メリット
          </span>
          とも言えます。
        </p>
        <br />
        ここでは、そんなネガティブな行動があなたに何をもたらしているのか考えていきます。
      </Navigation>
      <br />
      <Navigation content="点(DOTS)を結ぶ">
        <span className="text-blue-400 hover:cursor-pointer">
          エクササイズはこちら
        </span>
        <h1>DOTSとはそれぞれの頭文字を取ったものです。</h1>
        <br />
        <ul>
          <li>
            <span className="border-b-4 border-red-300">
              Distraction: 気を紛らす
            </span>
          </li>
          <li>
            <span className="border-b-4 border-red-300">
              Opting out: 離れる
            </span>
          </li>
          <li>
            <span className="border-b-4 border-red-300">Thinking: 考える</span>
          </li>
          <li>
            <span className="border-b-4 border-red-300">
              Substances: 物質依存、その他
            </span>
          </li>
        </ul>
        <br />
        嫌な考え、気持ちが思い浮かんだときに、それらにどのように対処したか記録してみましょう。
      </Navigation>
      <br />
      <Navigation content="心をオープンにするエクササイズ">
        <span className="text-blue-400 hover:cursor-pointer">
          エクササイズはこちら
        </span>
        <p>
          上記で扱ってきた、自分にとって厄介な思考とは、ここでは
          <span className="text-red-500">マインド</span>と呼びます。
        </p>
        <p>
          悪者のような扱いかもしれませんが、単なる思考のことで、忌み嫌うものではありません。
        </p>
        <p>
          ただ、自分を責めるマインドが
          <span className="border-b-4 border-red-300">
            自分の行動を支配し始める(
            <span className="text-red-500">フュージョン</span>する)
          </span>
          と、ネガティブな感情、行動に囚われてしまい、価値のある人生を遠のけてしまうこともあります。
        </p>
        <p>
          そこで、ここでは<span className="text-red-500">脱フュージョン</span>
          と言って、厄介な思考と心の距離を置くエクササイズを行います。
        </p>
      </Navigation>

      <p className="mt-36" />
    </div>
  );
};

export default Top;
