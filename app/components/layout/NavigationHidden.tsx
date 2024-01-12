'use client';

import { child } from 'firebase/database';
import { useState } from 'react';

interface NavigationHiddenProps {
  children: React.ReactNode;
}
const NavigationHidden: React.FC<NavigationHiddenProps> = ({ children }) => {
  return (
    <div>
      <div className="flex bg-white justify-end p-6 mb-6">
        <div className="mr-auto mt-3 mr-6">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationHidden;
