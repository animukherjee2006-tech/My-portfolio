import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    {/* basename ko hata diya hai taaki Render par sahi se chale */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)