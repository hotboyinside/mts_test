import './HeroesItems.scss'

import { MarvelCharacter } from '../../service/service';

interface HeroesItemsProps {
    currentItems: MarvelCharacter[]
}

const HeroesItems = ({currentItems}: HeroesItemsProps) => {
  return (
    <div className="items">
    {currentItems && currentItems.map((item) => (
      <div>
        <h3>Item #{item.name}</h3>
      </div>
    ))}
      </div>
  );
}

export default HeroesItems