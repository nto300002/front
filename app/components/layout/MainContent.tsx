import React from 'react';

const MainContent = ({ children }: any) => {
  return (
    <div className="w-10/12 h-screen text-gray-800 bg-white p-32 mb-42 rounded-2xl bg-opacity-70">
      {children}
    </div>
  );
};

export default MainContent;
