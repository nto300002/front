import Image from 'next/image';
import React from 'react';

const Avatar = () => {
  return (
    <div>
      <Image src="/guest.png" alt="avatar" width={40} height={40} />
    </div>
  );
};

export default Avatar;
