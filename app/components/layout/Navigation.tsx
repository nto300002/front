'use client';
import React, { useState } from 'react';
import NavigationContent from './NavigationContent';
import NavigationHidden from './NavigationHidden';
interface NavigationProps {
  content: String;
  children: React.ReactNode;
}
const Navigation: React.FC<NavigationProps> = ({ content, children }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div
        className="relative hover:cursor-pointer"
        onClick={() => setIsClicked(!isClicked)}
      >
        <NavigationContent content={content} />
        {isClicked ? (
          <>
            <span className="ml-auto absolute top-5 right-10 text-xl">-</span>
          </>
        ) : (
          <>
            <span className="ml-auto absolute top-5 right-10 text-xl">+</span>
          </>
        )}
      </div>
      {isClicked ? (
        <>
          <NavigationHidden>{children}</NavigationHidden>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navigation;
