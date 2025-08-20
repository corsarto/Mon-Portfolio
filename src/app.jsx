import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'
import Home from './pages/Home/home.jsx'
import '../src/assets/style/app.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<div>Projets Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)