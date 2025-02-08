import './GameOver.css';
import Trophy from '../../images/Trophy.png';


window.restartGame = () => {
    location.reload();
}

window.DefineWinner = function(playerOneScore,playerTwoScore){
    const winner = playerOneScore > playerTwoScore ? 'Player 1' : 'Player 2';

    document.querySelector('.winner').innerHTML= winner;
    document.querySelector('.game-over-screen').classList.add('active');
}

function GameOver(){

    return /*html*/`
        <section class='game-over-screen'>
            <div class='game-over'>
                <h1 class='winner game-over-text'>No one</h1>
                <h2 class='winner-text game-over-text'>is the Winner!!!</h2>
                <img src = ${Trophy}>
                <button class='restart-button' onClick='restartGame()'>restart</button>
            </div>
        </section>
    `
}

export default GameOver;