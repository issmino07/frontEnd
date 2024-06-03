import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import Reservations from './pages/reservas/ReservaPage'
import CatalogPage from './pages/catalogo/CatalogoPages'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:searchTerm" element={<HomePage/>} />
        <Route path="/reservaciones" element={<Reservations />} />
        <Route path="/catalogo" element={<CatalogPage />} />
    </Routes>
  )
}
