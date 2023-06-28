
import Mapa from '../components/Mapa';
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {


  return (
    <div className='App'>
      <div className="location">
        <Mapa/>
      </div>
      <div className='formulario'>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
