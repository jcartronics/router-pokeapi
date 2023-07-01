// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// Componentes
import { Navbar } from './components/Navbar';
import { PokeCard } from './components/PokeCard';
import { Home } from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PokeList } from './components/PokeList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/pokemon' element={<PokeList/>} />
          <Route path='/pokemon/:id' element={<PokeCard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
