import './style.css';
import aluraPixel from '../../images/alura-pixel.png';

function CardGame(icon = aluraPixel, alt = 'Alura logo'){
    return /*html*/`
        <article class='card-game'>
            <img src= "${icon}" alt='${alt}'>
        </article>
    `;
}

export default CardGame;