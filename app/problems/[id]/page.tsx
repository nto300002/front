import Navigation from '@/app/components/layout/Navigation';
import DotsForm from '@/app/components/pages/dots/DotsForm';
import ItemListDots from '@/app/components/pages/dots/ItemList';
import ItemDetail from '@/app/components/pages/problems/ItemDetail';
import ItemList from '@/app/components/pages/problems/ItemList';
import React from 'react';

const ProblemDetail = () => {
  return (
    <div>
      <ItemDetail />
      <p className="mt-4" />
      <Navigation content="点(DOTS)を結ぶ">
        <DotsForm />
      </Navigation>
      <ItemListDots />
    </div>
  );
};

export default ProblemDetail;
