import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import GlobalStyled from './styles/global'
import Reset from './styles/reset'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Reset/>
    <GlobalStyled/>
    <App/>
    </BrowserRouter>    
  </React.StrictMode>,
)
