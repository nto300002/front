import React from 'react';
import GainForm from '../components/pages/gains/GainForm';
import ItemList from '../components/pages/gains/ItemList';

const Gains = () => {
  return (
    <div className="w-1/2 mt-5">
      <GainForm />
      <ItemList />
    </div>
  );
};

export default Gains;
