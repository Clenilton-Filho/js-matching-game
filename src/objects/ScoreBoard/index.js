import './style.css';

import IconArrow from '../../components/IconArrow';
import PlayerName from '../../components/PlayerName';
import VersusText from '../../components/VersusText';
import PlayerScore from '../../components/PlayerScore';

window.ScoreBoard = {};

window.ScoreBoard = {
    HandleClick: () => {
      const $divIconArrow = document.querySelector('#div-icon-arrow');
  
        $divIconArrow.classList.toggle('active');
    }
  };

function ScoreBoard(){

    return /*html*/`
        <header class="score-board">
                <div id='div-icon-arrow'>
                    ${IconArrow("")}
                </div>
                <div class='div-score'>
                    ${PlayerName("player1")}
                    <div class='score-player' onClick="ScoreBoard.HandleClick(event)">
                        ${PlayerScore()}
                    </div>
                    ${VersusText()}
                    
                    <div class='score-player' onClick="ScoreBoard.HandleClick(event)">
                        ${PlayerScore()}
                    </div>
                    ${PlayerName("player2")}
                </div>

        </header>
    `
}

export default ScoreBoard;