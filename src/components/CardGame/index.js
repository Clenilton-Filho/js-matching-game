import './style.css';
import aluraPixel from '../../images/alura-pixel.png';

function CardGame(){
    return `
        <article class='card-game'>
            <img src= ${aluraPixel} alt='Logo da plataforma Alura'>
        </article>
    `;
}

export default CardGame;