import HiddenItem from '@/app/components/layout/HiddenItem';
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
      <HiddenItem title="入力フォームを表示する">
        <DotsForm />
      </HiddenItem>
      <ItemListDots />
    </div>
  );
};

export default ProblemDetail;
