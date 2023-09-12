import './Deals.js'
import { useNavigate } from 'react-router-dom'

function DealsCard({item, store}) {
    const navigate = useNavigate()

    function handleClick() {
      navigate(`/game/${item.gameID}`)
    }
  
    return (
      <div className='deals-card' onClick={handleClick}>
          <img src={item.thumb} className="deals-card__img" alt='' />
          <div className="deals-card__content">
              <div className="deals-card__container">
                  <h3 className="deals-card__title">{item.title}</h3>
                  <h4 className="deals-card__info">{store}</h4>
              </div>
              <span className="deals-card__price">{item.salePrice == 0 ? 'Free' : '$' + item.salePrice}</span>
          </div>
      </div>
    )
}

export default DealsCard