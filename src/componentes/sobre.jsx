// Sobre.jsx

import React, { useState } from 'react'
import build from '../../public/build.png'
import runa from '../../public/runa.png'
import match from '../../public/match.png'
import mono from '../../public/mono.jpg'
import './scss/sobre.scss'

const Sobre = () => {
    const [AumentarIndex, setAumentarIndex] = useState(null)

    const handleAmpliar = (index) => {
        setAumentarIndex(index === AumentarIndex ? null : index)
    }

    return (
        <div className="sobre-container">
            <div className={`sobre-item ${AumentarIndex === 0 ? 'Aumentar' : ''}`} onClick={() => handleAmpliar(0)}>
                <h1>Build pra WW</h1>
                <img src={build} alt="Build pra WW" />
            </div>
            <div className={`sobre-item ${AumentarIndex === 1 ? 'Aumentar' : ''}`} onClick={() => handleAmpliar(1)}>
                <h1>Runas</h1>
                <img src={runa} alt="Runas" />
            </div>
            <div className={`sobre-item ${AumentarIndex === 2 ? 'Aumentar' : ''}`} onClick={() => handleAmpliar(2)}>
                <h1>Matchups</h1>
                <img src={match} alt="Matchups" />
            </div>
            <div className={`sobre-item ${AumentarIndex === 3 ? 'Aumentar' : ''}`} onClick={() => handleAmpliar(3)}>
                <h1>Skin de Mono</h1>
                <img src={mono} alt="Skin de Mono" />
            </div>
        </div>
    )
}

export default Sobre
