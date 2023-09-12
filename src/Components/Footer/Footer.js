import logo from '../../images/Logo.svg'
import './Footer.css'
import {FaFacebook, FaSteam, FaTwitter, FaDiscord} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className='footer'>
      <div className="footer__container">
        <img src={logo} className='logo' onClick={() => navigate('/')} alt='' />
        <ul className="footer__list">
            <li className="footer__item">Deals</li>
            <li className="footer__item">Privacy Policy</li>
            <li className="footer__item">Contact Us</li>
            <li className="footer__item">Terms & conditions</li>
        </ul>
        <div className="footer__icons">
            <a  href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
              <FaFacebook className='icon'/>
            </a>
            <a href="https://store.steampowered.com/" target='_blank' rel='noreferrer'>
              <FaSteam className='icon'/>
            </a>
            <a href="https://twitter.com/" target='_blank' rel='noreferrer'>
              <FaTwitter className='icon'/>
            </a>
            <a href='https://discord.com/' target='_blank' rel='noreferrer'>
              <FaDiscord className='icon'/>
            </a>
        </div>
        <a className="footer__desc" href='https://apidocs.cheapshark.com/' target='_blank' rel='noreferrer'>Made using CheapShark API.</a>
        <div className="footer__desc">© Copyrights. 2023 CheapGaming. All rights reserved. All trademarks are the property of their respective owners.</div>
      </div>
    </footer>
  )
}

export default Footer