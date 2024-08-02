import { createContext } from 'react';
import { MarvelCharacter } from '../service/service';

type ContextType = {
  characters: MarvelCharacter[];
  setCharacters: (characters: MarvelCharacter[]) => void;
};
export const MarvelContext = createContext<ContextType | undefined>(undefined);