import React from 'react';
import ProblemForm from '../components/pages/problems/ProblemForm';
import HiddenItem from '../components/layout/HiddenItem';
import ProblemsItem from '../components/pages/problems/ProblemItem';

const Problem = () => {
  return (
    <div className="w-1/2 mt-5">
      <HiddenItem title="入力フォームを表示する">
        <ProblemForm />
      </HiddenItem>
      <ProblemsItem />
    </div>
  );
};

export default Problem;
