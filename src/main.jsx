import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Informacoes from './pages/Informacoes';
import Plano from './pages/Plano';
import Complemento from './pages/Complemento';
import Resumo from './pages/Resumo';

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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
