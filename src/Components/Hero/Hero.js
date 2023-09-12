import './Hero.css';
import { useState, useEffect } from 'react';
import gameCover from '../../images/RedDeadRedemption2Cover.jpg';
import gameCover2 from '../../images/BaldursGate3Cover.png';
import gameCover3 from '../../images/MassEffectCover.png';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();
  const [firstGame, setFirstGame] = useState({})
  const [secondGame, setSecondGame] = useState({})
  const [thirdGame, setThirdGame] = useState({})
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    const resFirst = await fetch('https://www.cheapshark.com/api/1.0/games?id=202278');
    const dataFirst = await resFirst.json();

    const resSecond = await fetch('https://www.cheapshark.com/api/1.0/games?id=206516')
    const dataSecond = await resSecond.json()

    const resThird = await fetch('https://www.cheapshark.com/api/1.0/games?id=225750')
    const dataThird = await resThird.json()

    setFirstGame(dataFirst)
    setSecondGame(dataSecond)
    setThirdGame(dataThird)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    loading ? '' :
    <div className='hero'>
      <h2 className='hero__featured-title'>Featured Games</h2>
      <div className='hero__featured'>
        <div className='hero__card hero__card-first' onClick={() => navigate('game/206516')} >
          <img
            className='hero__card-img'
            src={gameCover}
            alt='Red Dead Redemption 2 Cover Art'
          />
          <div className='hero__card-content'>
            {secondGame.deals[0].price === secondGame.cheapestPriceEver.price && (<span className="tag-historical">Historical low</span>)}
            <h3 className='hero__card-title-small'>{secondGame.info.title}</h3>
            <div className='hero__card-flex'>
              <h4 className='hero__card-desc'>
                from <span className='hero__card-price--small'>{secondGame.deals[0].price == 0 ? 'Free' : '$' + secondGame.deals[0].price}</span>
              </h4>
              <button className='btn btn--small' onClick={() => navigate('game/206516')} >Compare Prices</button>
            </div>
          </div>
        </div>
        <div className='hero__card hero__card-second' onClick={() => navigate('game/202278')} >
          <img
            className='hero__card-img'
            src={gameCover2}
            alt="Baldur's Gate 3 Cover Art"
          />
          <div className='hero__card-content'>
          {firstGame.deals[0].price === firstGame.cheapestPriceEver.price && (<span className="tag-historical">Historical low</span>)}
            <h3 className='hero__card-title'>{firstGame.info.title}</h3>
            <div className='hero__card-flex'>
              <h4 className='hero__card-desc'>
                from <span className='hero__card-price'>{firstGame.deals[0].price == 0 ? 'Free' : '$' + firstGame.deals[0].price}</span>
              </h4>
              <button className='btn' onClick={() => navigate('game/202278')} >Compare Prices</button>
            </div>
          </div>
        </div>
        <div className='hero__card hero__card-last' onClick={() => navigate('game/225750')} >
          <img
            className='hero__card-img'
            src={gameCover3}
            alt='Mass Effect Cover Art'
          />
          <div className='hero__card-content'>
          {thirdGame.deals[0].price === thirdGame.cheapestPriceEver.price && (<span className="tag-historical">Historical low</span>)}
            <h3 className='hero__card-title-small'>{thirdGame.info.title}</h3>
            <div className='hero__card-flex'>
              <h4 className='hero__card-desc'>
                from <span className='hero__card-price--small'>{thirdGame.deals[0].price == 0 ? 'Free' : '$' + thirdGame.deals[0].price}</span>
              </h4>
              <button className='btn btn--small' onClick={() => navigate('game/225750')} >Compare Prices</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
