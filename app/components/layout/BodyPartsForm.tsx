'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const BodyPartsForm = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [showCircle, setShowCircle] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const boundingBox = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - boundingBox.left;
    const y = event.clientY - boundingBox.top;

    setCirclePosition({ x, y });
    setShowCircle(true);
  };

  return (
    <div className="relative">
      <label>体のどの部位にその感情があるか</label>
      <Image
        src="/body.png"
        alt="Clickable Image"
        onClick={handleClick}
        width={200}
        height={250}
      />
      {showCircle && (
        <div
          className="absolute w-8 h-8 bg-red-500 rounded-full"
          style={{ top: circlePosition.y - 4, left: circlePosition.x - 4 }}
        />
      )}
    </div>
  );
};

export default BodyPartsForm;
