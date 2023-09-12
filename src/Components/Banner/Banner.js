import './Banner.css';
import {
  SiSteam,
  SiBattledotnet,
  SiGogdotcom,
  SiEpicgames,
  SiHumblebundle,
} from 'react-icons/si';

function Banner() {
  return (
    <section className='banner'>
      <div className='banner__container'>
        <h1 className='banner__title'>Deals from all of the top game stores!</h1>
        <p className='banner__desc'>Don't waste money on games. Buy them at the best prcie</p>
        <div className='banner__icons'>
          <SiSteam className='icon' />
          <SiGogdotcom className='icon' />
          <SiEpicgames className='icon' />
          <SiBattledotnet className='icon' />
          <SiHumblebundle className='icon' />
        </div>
      </div>
    </section>
  );
}

export default Banner;
