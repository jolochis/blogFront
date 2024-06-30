import { createContext, useState, ReactNode } from "react";
import { EntradaInterface } from "../components/interface/EntradaInterface";

interface SearchContextType {
  searchResults: EntradaInterface[];
  setSearchResults: (newResults: EntradaInterface[]) => void;
}

export const SearchContext = createContext<SearchContextType>({
  searchResults: [],
  setSearchResults: () => {},
});

interface SearchProviderProps {
  children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchResults, setSearchResults] = useState<EntradaInterface[]>([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
}
