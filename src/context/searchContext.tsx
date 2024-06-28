import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface Post {
  id: number;
  titulo: string;
  contenido: string;
  fecha: string;
}

interface SearchContextType {
  searchResults: Post[];
  setSearchResults: Dispatch<SetStateAction<Post[]>>;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

interface SearchProviderProps {
  children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchResults, setSearchResults] = useState<Post[]>([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
}
