'use client';
import { useState, ChangeEvent, MouseEvent } from 'react';
import Image from 'next/image';

interface CirclePosition {
  x: number;
  y: number;
}

const BodyPartsForm: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    '/body.png'
  );
  const [circlePosition, setCirclePosition] = useState<CirclePosition>({
    x: 0,
    y: 0,
  });
  const [showCircle, setShowCircle] = useState<boolean>(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleClick = (event: MouseEvent<HTMLImageElement>) => {
    const boundingBox = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - boundingBox.left;
    const y = event.clientY - boundingBox.top;

    setCirclePosition({ x, y });
    setShowCircle(true);
  };

  return (
    <div className="relative">
      <label>体のどの部位にその感情があるか</label>
      <input type="file" onChange={handleFileChange} />
      {selectedImage && (
        <Image
          src={selectedImage}
          alt="Clickable Image"
          onClick={handleClick}
          width={200}
          height={250}
        />
      )}
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
