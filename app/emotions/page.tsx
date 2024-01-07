import React from 'react';
import MainContent from '../components/layout/MainContent';
import Emotion from '../components/emotions/Emotion';
import SearchInput from '../components/layout/SearchInput';
import LikeButton from '../components/layout/LikeButton';

const Emotions = () => {
  return (
    <MainContent>
      <div className="text-right">
        <LikeButton />
        <div className="flex justify-end">
          <SearchInput id="state_of_mind" name="state_of_mind">
            感情の名前
          </SearchInput>
          <SearchInput id="five-ws" name="five-ws">
            絞り込み検索
          </SearchInput>
        </div>
      </div>
      <Emotion />
    </MainContent>
  );
};

export default Emotions;
