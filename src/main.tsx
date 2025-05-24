import { createRoot } from 'react-dom/client'
import './style/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MenuProvider } from './context/MenuContext.tsx'
import App from './views/App.tsx'
import Machupichu from './views/CapeTown.tsx'
import London from './views/London.tsx'
import Singapore from './views/Singapore.tsx'
import Bali from './views/Bali.tsx'

createRoot(document.getElementById('root')!).render(
  <MenuProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/travel/cape_town' element={<Machupichu />} />
        <Route path='/travel/london' element={<London />} />
        <Route path='/travel/singapore' element={<Singapore />} />
        <Route path='/travel/bali' element={<Bali />} />
      </Routes>
    </BrowserRouter>
  </MenuProvider>
)
