import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Download from './pages/Download'
import Datasets from './pages/Datasets'
import Docs from './pages/Docs'
import Comunidad from './pages/Comunidad'
import Swag from './pages/Swag'
import Code from './pages/Code'
import Docker from './pages/Docker'
import Galeria from './pages/Galeria'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<Download />} />
            <Route path="/datasets" element={<Datasets />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/comunidad" element={<Comunidad />} />
            <Route path="/swag" element={<Swag />} />
            <Route path="/code" element={<Code />} />
            <Route path="/docker" element={<Docker />} />
            <Route path="/galeria" element={<Galeria />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
