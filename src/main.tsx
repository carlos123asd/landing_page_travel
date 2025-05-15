import { createRoot } from 'react-dom/client'
import './style/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MenuProvider } from './context/MenuContext.tsx'
import App from './views/App.tsx'
import Machupichu from './views/Machupichu.tsx'

createRoot(document.getElementById('root')!).render(
  <MenuProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/travel/machupicchu' element={<Machupichu />} />
      </Routes>
    </BrowserRouter>
  </MenuProvider>
)
