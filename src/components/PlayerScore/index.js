import './style.css';

function PlayerScore(playerNumber,pointsAmount = 0) {
    
    return /*html*/ `
    <section id = 'player-${playerNumber}' data-pointsAmount="${pointsAmount}" class='player-score'>
        <div class='points'></div>
        <div class='points'></div>
        <div class='points'></div>
    </section>
    `;
}

export default PlayerScore;
