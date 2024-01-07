interface InputProps {
  children: React.ReactNode;
  id: string;
  name: string;
}

const EmotionFormTextArea: React.FC<InputProps> = ({ children, id, name }) => {
  return (
    <div className="text-xl">
      <p className="mr-5">{children}</p>
      <textarea
        id={id}
        name={name}
        className="border-gray-400 border-b-2 w-full"
      />
      <div className="mb-5" />
    </div>
  );
};
export default EmotionFormTextArea;
