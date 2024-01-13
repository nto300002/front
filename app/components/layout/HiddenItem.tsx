'use client';
import React, { useState } from 'react';

interface HiddenProps {
  title: string;
  children: React.ReactNode;
}

const HiddenItem: React.FC<HiddenProps> = ({ title, children }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="mb-4">
      <p
        className="text-brue-400 hover:cursor-pointer "
        onClick={() => setIsClicked(!isClicked)}
      >
        <span className="border-2 border-gray-400 p-2 rounded-md">{title}</span>
      </p>
      {isClicked ? (
        <>
          <div className="mt-4">{children}</div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HiddenItem;
