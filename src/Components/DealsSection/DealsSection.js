import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
import './DealsSection.css';

function DealsSection() {
  const [newDeals, setNewDeals] = useState([])
  const [bestDeals, setBestDeals] = useState([])
  const [topGames, setTopGames] = useState([])
  const [stores, setStores] = useState([])

  const navigate = useNavigate()

  async function fetchData() {
    const resStores = await fetch('https://www.cheapshark.com/api/1.0/stores');
    const dataStores = await resStores.json();

    const resNew = await fetch('https://www.cheapshark.com/api/1.0/deals?sortBy=Recent&pageSize=10')
    const dataNew = await resNew.json()

    const resBest = await fetch('https://www.cheapshark.com/api/1.0/deals?sortBy=Savings&pageSize=10')
    const dataBest = await resBest.json()

    const resTop = await fetch('https://www.cheapshark.com/api/1.0/deals?onSale=1&storeID=1&sortBy=Metacritic&pageSize=10')
    const dataTop = await resTop.json()

    setBestDeals(dataBest)
    setStores(dataStores)
    setNewDeals(dataNew)
    setTopGames(dataTop)
  }

  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    <>
      <section className='deals'>
        <h3 className='deals__title'>Deals</h3>
        <div className='deals__grid'>
          <div className='delas__container'>
            <h4 className='deals__subtitile'>New Deals</h4>
            <div className='deals__cards'>
              {newDeals.map((item) => (
                <Card key={item.dealID} item={item} store={stores[item.storeID - 1].storeName} />
              )
              )}
            </div>
            <button className='deals__btn btn btn--secondary' onClick={() => navigate('/deals/new')}>See All New Deals</button>
          </div>
          <div className='deals__container'>
            <h4 className='deals__subtitile'>Best Deals</h4>
            <div className='deals__cards'>
              {bestDeals.map((item) => (
                <Card key={item.dealID} item={item} store={stores[item.storeID - 1].storeName} />
              )
              )}
            </div>
            <button className='deals__btn btn btn--secondary' onClick={() => navigate('/deals/best')}>See All Best Deals</button>
          </div>
          <div className='deals__container'>
            <h4 className='deals__subtitile'>Popular Titles</h4>
            <div className='deals__cards'>
              {topGames.map((item) => (
                <Card key={item.dealID} item={item} store={stores[item.storeID - 1].storeName} />
              )
              )}
            </div>
            <button className='deals__btn btn btn--secondary' onClick={() => navigate('/deals/popular')}>See All Popular Titles</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default DealsSection;
