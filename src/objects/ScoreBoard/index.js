import './style.css';

import IconArrow from '../../components/IconArrow';
import PlayerName from '../../components/PlayerName';
import VersusText from '../../components/VersusText';
import PlayerScore from '../../components/PlayerScore';

window.ScoreBoard = {};

window.ScoreBoard = {
    HandleClick: (event) => {
      const $origin = event.target;
      const $iconArrow = $origin.closest('.score-player').querySelector('.icon-arrow');
  
    $iconArrow.classList.toggle('active');
    }
  };

function ScoreBoard(){

    return /*html*/`
        <header class="score-board">
                ${PlayerName("player1")}
                <div class='score-player' onClick="ScoreBoard.HandleClick(event)">
                    ${IconArrow("active")}
                    ${PlayerScore()}
                </div>
                ${VersusText()}
                
                <div class='score-player' onClick="ScoreBoard.HandleClick(event)">
                    ${IconArrow("")}
                    ${PlayerScore()}
                </div>
                ${PlayerName("player2")}

        </header>
    `
}

export default ScoreBoard;