'use client';
import React, { useState } from 'react';

const LikeButton = () => {
  const [isLike, setIsLike] = useState(false);
  return (
    <div className="hover:cursor-pointer">
      {isLike ? (
        <>
          <div
            className="i-prime-heart-fill w-7 h-7 text-red-500"
            onClick={() => setIsLike(!isLike)}
          />
        </>
      ) : (
        <>
          <div
            className="i-prime-heart w-7 h-7 text-red-500"
            onClick={() => setIsLike(!isLike)}
          />
        </>
      )}
    </div>
  );
};

export default LikeButton;
