'use client';

import { useState } from 'react';
import NavigationWindow from './NavigationHidden';

interface NavigationContentProps {
  content: String;
}

const NavigationContent: React.FC<NavigationContentProps> = ({ content }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div
        className="flex bg-red-200 justify-end p-6 hover:bg-gray-50 transition duration-300 ease-in-out shadow-md"
        onClick={() => setIsClicked(!isClicked)}
      >
        <div className="mr-auto mt-3 mr-6">
          <p className="text-2xl">{content}</p>
        </div>
      </div>
    </>
  );
};
export default NavigationContent;
