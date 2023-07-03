import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { UsuarioProvider } from './Context/usuario.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Informacoes from './pages/Informacoes';
import Plano from './pages/Plano';
import Complemento from './pages/Complemento';
import Resumo from './pages/Res/index.jsx';
import Fim from './pages/Fim/index.jsx';


const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App/>, 
    children: [
      {
        path: '/', 
        element: <Informacoes/>,
      },
      {
        path: 'plano',
        element: <Plano/>, 
      },
      {
        path: 'complemento',
        element: <Complemento/>, 
      },
      {
        path: 'resumo',
        element: <Resumo/>, 
      },
      {
        path: 'fim',
        element: <Fim/>, 
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsuarioProvider>
      <RouterProvider router={router} />
    </UsuarioProvider>
  </React.StrictMode>,
)
