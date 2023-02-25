import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Torta from './routes/Torta/Torta';
import Alfajor from './routes/Alfajor/Alfajor';
import Bombon from './routes/Bombon/Bombon';

export default function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/tortas" element={<Torta />} />
          <Route exact path="/alfajores" element={<Alfajor />} /> 
          <Route exact path="/bombones" element={<Bombon />} />                 
          <Route exact path="/item" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


