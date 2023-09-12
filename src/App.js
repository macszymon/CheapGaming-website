import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';
import Game from './Pages/Game/Game';
import Search from './Pages/Search/Search';
import Deals from './Pages/Deals/Deals';
import Socials from './Components/Socials/Socials';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/game/:id' element={<Game/>}></Route>
        <Route path='/games/:input' element={<Search />}></Route>
        <Route path='/deals/:type' element={<Deals />}></Route>
      </Routes>
      <Socials/>
      <Footer />
    </>
  );
}

export default App;
