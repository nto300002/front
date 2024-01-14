import React from 'react';
import ProblemForm from '../components/pages/problems/ProblemForm';
import Navigation from '../components/layout/Navigation';
import ProblemsItem from '../components/pages/problems/ProblemItem';

const Problem = () => {
  return (
    <div className="w-1/2 mt-5">
      <Navigation content="問題の深掘り">
        <ProblemForm />
      </Navigation>
      <ProblemsItem />
    </div>
  );
};

export default Problem;
