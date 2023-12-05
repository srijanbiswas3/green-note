import { useSearchContext } from "../../context/SearchProvider";

export const Search = () => {
  const { currentSearch, setCurrentSearch } = useSearchContext();

  const searchHandle = (e) => {
    const value = e.target.value;
    setCurrentSearch(value);
  };

  return (
    <input
      className="search-text"
      value={currentSearch}
      onChange={(e) => searchHandle(e)}
      type="text"
      placeholder="Search note"
    />
  );
};
