import "./style.css";
import CardGame from "../CardGame";
import javascriptLogo from '../../images/logo-javascript.png';
import cssLogo from '../../images/logo-css.png';
import htmlLogo from '../../images/logo-html.png';

window.CardFrontBack = {}

window.CardFrontBack.flipCard = (event) => {
    const $origin = event.target;
    const $cardFrontBack = event.target.closest('.card-front-back');

    $cardFrontBack.classList.toggle('active');

}

function CardFrontBack(){

    return /*html*/`
        <article id="card-1" class="card-front-back" onClick='CardFrontBack.flipCard(event)'>
            <div class='card front'>
                ${CardGame()}
            </div>
            <div class='card back'> 
                ${CardGame(javascriptLogo,"JavaScript logo")}
            </div>
        </article>
    `
}

export default CardFrontBack;