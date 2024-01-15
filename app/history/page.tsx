import React from 'react';
import Navigation from '../components/layout/Navigation';
import { Graph } from '../components/pages/values/Graph';
import GainItemList from '../components/pages/gains/ItemList';
import ProblemItemList from '../components/pages/problems/ItemList';
import ItemListDots from '../components/pages/dots/ItemList';
import EmotionItemList from '../components/pages/emotions/ItemList';
import Emotion from '../components/pages/emotions/Emotion';

const history = () => {
  return (
    <div className="w-1/2">
      <div className="mt-6">
        <Emotion />
      </div>
      <div className="mt-12">
        <Navigation content="価値の的">
          <Graph />
        </Navigation>
      </div>
      <div className="mt-6">
        <Navigation content="問題の深掘り">
          <ProblemItemList />
        </Navigation>
      </div>
      <div className="mt-6">
        <Navigation content="活力vs苦悩">
          <GainItemList />
        </Navigation>
      </div>
      <div className="mt-6">
        <Navigation content="点(DOTS)を結ぶ">
          <ItemListDots />
        </Navigation>
      </div>
      <div className="mt-6">
        <Navigation content="心をオープンにする">
          <EmotionItemList />
        </Navigation>
      </div>
    </div>
  );
};

export default history;
