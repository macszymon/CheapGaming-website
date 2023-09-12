import './Socials.css'
import { FaDiscord, FaFacebook, FaTwitch } from 'react-icons/fa'

function Socials() {
  return (
    <section className='socials'>
        <a href='https://discord.com/' target='_blank' rel='noreferrer' className="socials__box socials__discord">
            <h4 className='socials__title'>Join us on Discord</h4>
            <p className="socials__desc">Visit our official Discord server and meet other people from the community</p>
            <FaDiscord className='icon'/>
        </a>
        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer' className="socials__box socials__facebook">
            <h4 className='socials__title'>Follow us on Facebook</h4>
            <p className="socials__desc">Join us on Facebook and be up to date with all of the gaming deals</p>
                <FaFacebook className='icon'/>
        </a>
        <a href='https://www.twitch.tv/' target='_blank' rel='noreferrer' className="socials__box socials__twitch">
            <h4 className='socials__title'>Watch us on Twitch</h4>
            <p className="socials__desc">Join us on Twitch and watch members of our team</p>
                <FaTwitch className='icon'/>
        </a>
    </section>
  )
}

export default Socials