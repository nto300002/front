import React from 'react';
import MainContent from '../components/layout/MainContent';
import ValueForm from '../components/pages/values/ValueForm';
import ValueItem from '../components/pages/values/ValueItem';
import { Graph } from '../components/pages/values/Graph';

const Value = () => {
  return (
    <MainContent>
      <ValueForm />
      <ValueItem />
      <Graph />
    </MainContent>
  );
};

export default Value;
