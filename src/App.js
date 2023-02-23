import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


export default function App() {
  return (
    <div className='app'>
      <NavBar />
      <ItemListContainer/> 
      <ItemDetailContainer/> 
                    
    </div>
  );
};


