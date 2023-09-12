import './Card.css'
import { useNavigate } from 'react-router-dom'

function Card({item, store}) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/game/${item.gameID}`)
  }

  return (
    <div className='card' onClick={handleClick}>
        <img src={item.thumb} className="card__img" alt='' />
        <div className="card__content">
            <div className="card__container">
                <h3 className="card__title">{item.title}</h3>
                <h4 className="card__info">{store}</h4>
            </div>
            <span className="card__price">{item.salePrice == 0 ? 'Free' : '$' + item.salePrice}</span>
        </div>
    </div>
  )
}

export default Card