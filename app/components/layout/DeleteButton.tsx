const DeleteButton: React.FC = () => {
  return (
    <div className="text-xl text-white">
      <button type="submit" className="bg-red-500 rounded-lg hover:bg-red-600">
        <span className="p-2 i-solar-trash-bin-2-bold"></span>
      </button>
    </div>
  );
};
export default DeleteButton;
