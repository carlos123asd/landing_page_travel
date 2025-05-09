import { createRoot } from 'react-dom/client'
import './style/App.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MenuProvider } from './context/MenuContext.tsx'

createRoot(document.getElementById('root')!).render(
  <MenuProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  </MenuProvider>
)
