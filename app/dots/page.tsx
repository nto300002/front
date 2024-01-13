import Link from 'next/link';
import React from 'react';
import ItemList from '../components/pages/problems/ItemList';

const Dots = () => {
  return (
    <div className="mt-5">
      <p>
        <Link href="problems">
          <span className="text-blue-400 hover:cursor-pointer">
            問題の深掘り
          </span>
        </Link>
        において、問題を深掘りしている場合、それを身体の感覚と、思考(マインド)に分けて更に問題を深掘りすることができます。
        <br />
        また、DOTSという概念を用いて、あなたが嫌な気持ちにどのような形で抵抗しているか知ることができます。
      </p>
      <br />
      <p>
        では、深掘りをした問題のリストをクリックして、点(DOTS)を結んでみましょう！
      </p>
      <ItemList />
    </div>
  );
};

export default Dots;
