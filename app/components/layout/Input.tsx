interface InputProps {
  children: React.ReactNode;
  id: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ children, id, name }) => {
  return (
    <div className="text-2xl">
      <p className="mr-5">{children}</p>
      <input
        type="text"
        id={id}
        name={name}
        className="bg-gray-200 rounded-lg"
      />
      <div className="mb-5" />
    </div>
  );
};
export default Input;
