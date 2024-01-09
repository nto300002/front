import React from 'react';
interface InputProps {
  children: React.ReactNode;
  id: string;
  name: string;
}

const TextArea: React.FC<InputProps> = ({ children, id, name }) => {
  return (
    <div className="text-xl">
      <p className="mr-5">{children}</p>
      <textarea
        id={id}
        name={name}
        className="border-gray-400 border-2 rounded-md w-full h-32"
      />
      <div className="mb-5" />
    </div>
  );
};
export default TextArea;
