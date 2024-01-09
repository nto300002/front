const EditButton: React.FC = () => {
  return (
    <div className="text-xl text-white">
      <button
        type="submit"
        className="bg-green-500 rounded-lg hover:bg-green-600"
      >
        <span className="p-2 i-prime-pencil"></span>
      </button>
    </div>
  );
};
export default EditButton;
