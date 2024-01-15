import React from 'react';
import DescriptionOfDefusion from '../components/pages/emotions/DescriptionOfDefusion';
import OpenYourMindOfDefusion from '../components/pages/emotions/OpenYourMindOfDefusion';
import Navigation from '../components/layout/Navigation';
import EmotionForm from '../components/pages/emotions/EmotionForm';
import SubmitButton from '../components/layout/SubmitButton';
import ItemList from '../components/pages/emotions/ItemList';

const Emotions = () => {
  return (
    <div className="mt-12">
      <h1 className="mb-6">
        ここでは、脱フュージョンと、心をオープンにするエクササイズを行います。
      </h1>
      <Navigation content="脱フュージョンとは">
        <DescriptionOfDefusion />
      </Navigation>
      <Navigation content="心をオープンにするエクササイズとは">
        <OpenYourMindOfDefusion />
      </Navigation>
      <div className="mt-12">
        <Navigation content="入力フォームを表示する">
          <EmotionForm>回答する</EmotionForm>
        </Navigation>
      </div>
      <ItemList />
    </div>
  );
};

export default Emotions;
