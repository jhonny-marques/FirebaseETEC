import { BrowserRouter } from 'react-router-dom'; // Importe BrowserRouter

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Envolva App com BrowserRouter */}
    <App />
    </BrowserRouter>
  </StrictMode>,
)
