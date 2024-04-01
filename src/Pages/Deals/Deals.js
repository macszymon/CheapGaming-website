import { useState, useEffect } from 'react';
import DealsCard from './DealsCard';
import './Deals.css';
import { useParams } from 'react-router-dom';

function Deals() {
  const [newDeals, setNewDeals] = useState([]);
  const [bestDeals, setBestDeals] = useState([]);
  const [topGames, setTopGames] = useState([]);
  const [stores, setStores] = useState([]);

  const { type } = useParams();
  
  async function fetchData() {
    const resStores = await fetch('https://www.cheapshark.com/api/1.0/stores');
    const dataStores = await resStores.json();
    
    const resNew = await fetch(
      'https://www.cheapshark.com/api/1.0/deals?sortBy=Recent'
    );
    const dataNew = await resNew.json();

    const resBest = await fetch(
      'https://www.cheapshark.com/api/1.0/deals?sortBy=Savings'
    );
    const dataBest = await resBest.json();
    
    const resTop = await fetch(
      'https://www.cheapshark.com/api/1.0/deals?onSale=1&storeID=1&sortBy=Metacritic'
    );
    const dataTop = await resTop.json();
    
    setBestDeals(dataBest);
    setStores(dataStores);
    setNewDeals(dataNew);
    setTopGames(dataTop);
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  return (
    <main className='more-deals'>
      {type === 'new' && (
        <>
          <h2 className='more-deals__title'>New game deals</h2>
          <div className='more-deals__container'>
            {newDeals.map((item) => (
              <DealsCard
                key={item.dealID}
                item={item}
                store={stores[item.storeID - 1].storeName}
              />
            ))}
          </div>
        </>
      )}
      {type === 'best' && (
        <>
          <h2 className='more-deals__title'>Best game deals</h2>
          <div className='more-deals__container'>
            {bestDeals.map((item) => (
              <DealsCard
                key={item.dealID}
                item={item}
                store={stores[item.storeID - 1].storeName}
              />
            ))}
          </div>
        </>
      )}
      {type === 'popular' && (
        <>
          <h2 className='more-deals__title'>Popular titles</h2>
          <div className='more-deals__container'>
            {topGames.map((item) => (
              <DealsCard
                key={item.dealID}
                item={item}
                store={stores[item.storeID - 1].storeName}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
}

export default Deals;
