import { createRoot } from 'react-dom/client'
import './style/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MenuProvider } from './context/MenuContext.tsx'
import App from './views/App.tsx'
import Machupichu from './views/CapeTown.tsx'

createRoot(document.getElementById('root')!).render(
  <MenuProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/travel/cape_town' element={<Machupichu />} />
      </Routes>
    </BrowserRouter>
  </MenuProvider>
)
