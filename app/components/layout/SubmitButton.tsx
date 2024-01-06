interface ButtonProps {
  children: React.ReactNode;
}

const SubmitButton: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div className="text-xl text-white">
      <button
        type="submit"
        className="bg-green-500 rounded-lg hover:bg-green-600"
      >
        <span className="p-6">{children}</span>
      </button>
    </div>
  );
};
export default SubmitButton;
