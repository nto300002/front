interface InputProps {
  children: React.ReactNode;
  id: string;
  name: string;
}

const EmotionFormInput: React.FC<InputProps> = ({ children, id, name }) => {
  return (
    <div className="text-xl">
      <p className="mr-5">{children}</p>
      <input
        type="text"
        id={id}
        name={name}
        className="border-gray-400 border-b-2 w-full"
      />
      <div className="mb-5" />
    </div>
  );
};
export default EmotionFormInput;
