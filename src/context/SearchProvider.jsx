import { createContext, useContext, useState } from "react";

const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const [currentSearch, setCurrentSearch] = useState("");

  return (
    <SearchContext.Provider value={{ currentSearch, setCurrentSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
