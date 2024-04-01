import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Game.css'

function Game() {
  const { id } = useParams();
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchGame() {
    const res = await fetch(
      `https://www.cheapshark.com/api/1.0/games?id=${id}`
    );
    const data = await res.json();
    setGame(data);
    setLoading(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchGame();
  }, [game]);

  return (
  loading ? '' : 
    <main className='game'>
      <div className="game__header">
        <div className="game__info">
          <img src={game.info.thumb} className='game__img' alt='' />
          <h2 className="game__title">Buy {game.info.title}</h2>
        </div>
        <div className="game__prices">
          <h3 className="game__price-tag">Current Lowest Price</h3>
          <h4 className='game__price'>${game.deals[0].price}</h4>
          <h3 className="game__price-tag">Historical Low</h3>
          <h4 className='game__price'>${game.cheapestPriceEver.price}</h4>
        </div>
      </div>
      <div className="game__offers">
        <h5 className='game__offers-title'>Offers</h5>
        <div className="game__deals">
          {game.deals.map((deal, index) => (
          <a href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`} rel="noreferrer" target='_blank' className="deal">
            <div className="deal__flex-left">
              <img className='deal__img' src={`https://www.cheapshark.com/img/stores/banners/${deal.storeID - 1}.png`} alt='' />
              <span className="deal__title">{game.info.title}</span>
            </div>
            <div className="deal__flex-right">
              {(index === 0 && deal.savings > 0) && <span className='tag-best'>Best deal</span>}
              <div className='deal__discount'>
                <span className='deal__price'>${deal.price}</span>
                {deal.savings > 0 && <span className='deal__savings'>-{Math.floor(deal.savings)}%</span>}
              </div>
                <a href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`} rel="noreferrer" target='_blank' className='btn'>Buy Now</a>
            </div>
          </a>
        ))}
        </div>
      </div>
    </main>
  )
}

export default Game