import "./style.css";
import CardGame from "../CardGame";

window.CardFrontBack = {}

let $counter = 1;
let $card1 = '';
let activeCards = 0;


window.CardFrontBack.flipCard = (event) => {
    const $origin = event.target;
    const $cardFrontBack = $origin.closest('.card-front-back');
    const $dataplayer = document.querySelector('.icon-arrow').dataset.player;
    const $playerScores = document.querySelectorAll('.player-score');

    let playerOneScore = parseInt($playerScores[0].dataset.pointsamount);
    let playerTwoScore = parseInt($playerScores[1].dataset.pointsamount);

    if ($cardFrontBack === $card1) {
        return;
    }

    $cardFrontBack.classList.toggle('active');

    if ($counter < 2) {
        $card1 = $cardFrontBack;
        $counter = 2;
        console.log($cardFrontBack.querySelectorAll('img')[1]);
    } else {
        const $card1Img = $card1.querySelectorAll('img');
        const $card2Img = $cardFrontBack.querySelectorAll('img');

        if ($card1Img[1].src !== $card2Img[1].src) {
            setTimeout(function() {
                $cardFrontBack.classList.toggle('active');
                $card1.classList.toggle('active');

                window.IconArrow.HandleClick();
                $card1 = $cardFrontBack;
            }, 500);
        } else {
            $card1 = $cardFrontBack;
            activeCards += 2;

            if ($dataplayer === 'player-1') {
                playerOneScore++;

                $playerScores[0].dataset.pointsamount = playerOneScore;
                window.IconArrow.HandleClick();
            } else {
                playerTwoScore++;

                $playerScores[1].dataset.pointsamount = playerTwoScore;

                window.IconArrow.HandleClick();
            }
        }

        if (activeCards == 6){
            setTimeout(()=>{
                window.DefineWinner(playerOneScore,playerTwoScore);
            },1000);
        }

        $counter = 0;
        console.log(activeCards);
    }
};


function CardFrontBack(cardIcon = javascriptLogo, altIcon = 'JavaScript Logo'){

    return /*html*/`
        <article class="card-front-back" onClick='CardFrontBack.flipCard(event)'>
            <div class='card front'>
                ${CardGame()}
            </div>
            <div class='card back'> 
                ${CardGame(cardIcon, altIcon)}
            </div>
        </article>
    `
}

export default CardFrontBack;
