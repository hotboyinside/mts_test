import './HeroesPage.scss'

import { useState, useEffect, useContext } from 'react';

import { Service } from '../../service/service';

import { MarvelCharacter } from '../../service/service';
import { MarvelContext } from '../../context/context';

import Header from '../../components/Header/Header';
import HeroesItems from '../../components/HeroesItems/HeroesItems';

function HeroesPage() {
  const service = Service.getInstance();
  const context = useContext(MarvelContext)
  const characters = context?.characters!;
  const setCharacters = context?.setCharacters!;
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const limit = 20;

  useEffect(() => {
    fetchCharacters(offset);
  }, [offset]);

  const fetchCharacters = async (offset: number) => {
    setLoading(true);
    try {
      const response = await service.getCharacters(offset, limit);
      setCharacters(response.data.results);
      setTotal(response.data.total);
    } catch (err) {
      setError('Невозможно подключиться к серверу');
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (offset + limit < total) {
      setOffset(offset + limit);
    }
  };

  const handlePreviousPage = () => {
    if (offset - limit >= 0) {
      setOffset(offset - limit);
    }
  };

  if (loading && characters.length === 0) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
      <main className="main">
        <section className="heroes">
          <div className="heroes__container container">
            <h1 className="heroes__title title">Герои комиксов</h1>
            <HeroesItems currentItems={characters} />
            <div className="pagination">
              <button 
                onClick={handlePreviousPage} 
                disabled={offset === 0}
              >
                Назад
              </button>
              <span>Страница {offset / limit + 1} из {Math.ceil(total / limit)}</span>
              <button 
                onClick={handleNextPage} 
                disabled={offset + limit >= total}
              >
                Вперед
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HeroesPage
