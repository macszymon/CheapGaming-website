import { useState } from 'react'
import logo from '../../images/Logo.svg'
import './Nav.css'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const [input, setInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    navigate(`/games/${input}`)
    setInput('')
  }

  return (
    <nav className='nav'>
      <div className="nav__container">
        <img className='logo' src={logo} alt="company logo" onClick={() => navigate('/')} />
        <ul className='nav__list'>
          <li className='nav__item' onClick={() => navigate('/')}>Home</li>
          <li className='nav__item' onClick={() => navigate('/deals/new')}>New</li>
          <li className='nav__item' onClick={() => navigate('/deals/best')}>Best</li>
          <li className='nav__item' onClick={() => navigate('/deals/popular')}>Popular</li>
        </ul>
        <form onSubmit={(e) => handleSubmit(e)} className='nav__form'>
            <BiSearch/>
            <input className='nav__input' type="text" placeholder='What game are you looking for?' value={input} onChange={(e) => setInput(e.target.value)} />
        </form>
        {isOpen ? <AiOutlineClose onClick={() => setIsOpen(prev => !prev)} className='btn-icon nav__icon'/> :
        <AiOutlineMenu onClick={() => setIsOpen(prev => !prev)} className='btn-icon nav__icon'/>}
      </div>
      {isOpen && <div className="nav__menu-mobile">
        <ul className='nav__list-mobile'>
          <li className='nav__item' onClick={() => navigate('/')}>Home</li>
          <li className='nav__item' onClick={() => navigate('/deals/new')}>New</li>
          <li className='nav__item' onClick={() => navigate('/deals/best')}>Best</li>
          <li className='nav__item' onClick={() => navigate('/deals/popular')}>Popular</li>
        </ul>
        <form onSubmit={(e) => handleSubmit(e)} className='nav__form-mobile'>
            <BiSearch/>
            <input className='nav__input' type="text" placeholder='What game are you looking for?' value={input} onChange={(e) => setInput(e.target.value)} />
        </form>
      </div>}
    </nav>
  )
}

export default Nav