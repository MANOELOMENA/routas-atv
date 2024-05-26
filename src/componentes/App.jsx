import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Sobre from './sobre'
import Home from './Home'
import Contato from './contato'
import Footer from './Footer'
import Login from './Login'
import './scss/App.scss'

const App = () => {
    return (
        <Router>
            <div>
              <header>
                <div className="logo">Página de Mono Warwick</div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
              </header>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path='/login' element={<Login />}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default App
