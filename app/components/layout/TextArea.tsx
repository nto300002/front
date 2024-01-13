import React from 'react';
interface InputProps {
  children: React.ReactNode;
  id: string;
  name: string;
}

const TextArea: React.FC<InputProps> = ({ children, id, name }) => {
  return (
    <div className="text-md">
      <p className="text-left">{children}</p>
      <textarea
        id={id}
        name={name}
        className="border-gray-400 border-b-2 w-full h-12"
      />
    </div>
  );
};
export default TextArea;
