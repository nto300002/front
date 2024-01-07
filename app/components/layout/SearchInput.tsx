interface InputProps {
  children: React.ReactNode;
  id: string;
  name: string;
}

const SearchInput: React.FC<InputProps> = ({ children, id, name }) => {
  return (
    <div className="text-base flex flex-col">
      <div>
        <label className="mr-32">{children}</label>
      </div>
      <div>
        <input
          type="text"
          id={id}
          name={name}
          className="border-gray-400 border-2 rounded-lg"
          placeholder="検索"
        />
        <p className="i-prime-search" />
      </div>
      <div className="mb-2" />
    </div>
  );
};
export default SearchInput;
