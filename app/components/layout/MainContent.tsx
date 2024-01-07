import React from 'react';

const MainContent = ({ children }: any) => {
  return (
    <div className="w-10/12 h-full text-gray-800 bg-white p-32 rounded-2xl bg-opacity-10">
      {children}
    </div>
  );
};

export default MainContent;
