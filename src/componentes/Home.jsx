import React from 'react'
import logo from '../../public/logo.jpg'
import './scss/Home.scss'

const Home = () => {
    return (
        <div className="home-container">
            <h1>Página de Mono Warwick</h1>
            <form className="home-form">
                <div className="form-content">
                    <img src={logo} alt="Logo" className="logo" />
                    <div className="text-content">
                        <h1>Warwick, A Ira Desimpedida de Zaun</h1>
                        <p>Warwick, conhecido como "A Ira Desimpedida de Zaun", é um campeão icônico do jogo League of Legends. Originalmente um ser humano, ele foi transformado em uma criatura monstruosa por experimentos químicos e mágicos conduzidos pelo cientista louco Singed. Sua transformação resultou em uma besta meio-humana, meio-lobo, com uma sede insaciável por sangue.</p>
                        <p>A história de Warwick é profundamente trágica e complexa. Antes de sua transformação, ele era um criminoso em Zaun, mas após os experimentos, ele perdeu quase toda sua humanidade. A sede de sangue que agora o consome é uma constante lembrança de seu passado sombrio. Apesar disso, uma parte de sua antiga personalidade ainda luta para emergir, o que o torna um personagem intrigante e multifacetado dentro do universo de League of Legends.</p>
                        <p>Em termos de jogabilidade, Warwick é um caçador formidável. Sua habilidade de sentir e perseguir inimigos feridos o torna um predador implacável no mapa. Com habilidades que lhe conferem regeneração rápida de vida e controle de grupo, ele é um campeão versátil e ameaçador em batalhas. Seu famoso "Uivo Primal" e "Rugido do Medo" o tornam uma presença assustadora em qualquer partida, sempre pronto para abater suas presas.</p>
                        <p>Warwick é um exemplo perfeito de como a narrativa e o design de personagem podem se entrelaçar para criar uma experiência rica e envolvente, cativando tanto os jogadores novatos quanto os veteranos de League of Legends.</p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Home
