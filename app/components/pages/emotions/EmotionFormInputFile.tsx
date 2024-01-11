interface InputProps {
  children: React.ReactNode;
  id: string;
  name: string;
}

const EmotionFormInputFile: React.FC<InputProps> = ({ children, id, name }) => {
  return (
    <div className="text-base">
      <p className="mr-5">{children}</p>
      <input
        type="file"
        id={id}
        name={name}
        className="border-gray-400 border-b-2"
      />
      <div className="mb-5" />
    </div>
  );
};
export default EmotionFormInputFile;
