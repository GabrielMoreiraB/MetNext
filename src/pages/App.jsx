
import Mapa from '../components/Mapa';
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {


  return (
    <div className='App'>
      <div className="location">
        <Mapa/>
      </div>
      <Outlet/>
    </div>
  )
}

export default App
