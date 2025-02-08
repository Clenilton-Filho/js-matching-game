import './style.css';

import IconArrow from '../../components/IconArrow';
import PlayerName from '../../components/PlayerName';
import VersusText from '../../components/VersusText';
import PlayerScore from '../../components/PlayerScore';


function ScoreBoard(){

    return /*html*/`
        <header class="score-board">
                <div id='div-icon-arrow'>
                    ${IconArrow("")}
                </div>
                <div class='div-score'>
                    ${PlayerName("player1")}
                    <div class='score-player' onClick="IconArrow.HandleClick(event)">
                        ${PlayerScore(0)}
                    </div>
                    ${VersusText()}
                    
                    <div class='score-player' onClick="IconArrow.HandleClick(event)">
                        ${PlayerScore(0)}
                    </div>
                    ${PlayerName("player2")}
                </div>

        </header>
    `
}

export default ScoreBoard;