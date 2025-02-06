import "./style.css";
import CardGame from "../CardGame";
import javascriptLogo from '../../images/logo-javascript.png';
import cssLogo from '../../images/logo-css.png';
import htmlLogo from '../../images/logo-html.png';

window.CardFrontBack = {}

let $counter = 1;
let $card1 = '';


window.CardFrontBack.flipCard = (event) => {
    const $origin = event.target;
    const $cardFrontBack = $origin.closest('.card-front-back');

    $cardFrontBack.classList.toggle('active');

    if ($counter < 2){
        $card1 = $cardFrontBack;
        $counter = 2;
        console.log($counter)
    }else {        
        setTimeout(function(){
            $cardFrontBack.classList.toggle('active');
            $card1.classList.toggle('active');

            window.ScoreBoard.HandleClick();
        },500)

        $counter = 0;  
        console.log($counter)
    }
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