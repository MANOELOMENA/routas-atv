import React from 'react';
import mm from '../../public/mm.jpg';
import icone1 from '../../public/fone.png'
import icone2 from '../../public/insta.png'
import icone3 from '../../public/email.png'
import icone4 from '../../public/github.png'
import './scss/Contato.scss';

const Contato = () => {
    return (
        <div className="contato-container">
            <div className="contato-box">
                <img src={mm} alt="foto" className="contato-image" />
                <div className="contato-info">
                    <h1>Contato de um Mono Warwick</h1>
                    <div className="info">
                        <div className="info-item">
                            <img src={icone1} alt="telefone" className="info-icon" />
                            <p>+55 82 9 9118-5009</p>
                        </div>
                        <div className="info-item">
                            <img src={icone2} alt="Insta" className="info-icon" />
                            <p>@messiasomena</p>
                        </div>
                        <div className="info-item">
                            <img src={icone3} alt="Email" className="info-icon" />
                            <p>messiasomenaneto@gmail.com</p>
                        </div>
                        <div className="info-item">
                            <img src={icone4} alt="GitHub" className="info-icon" />
                            <p>MANOELOMENA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contato;
