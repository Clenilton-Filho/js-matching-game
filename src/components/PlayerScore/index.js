import './style.css';

function PlayerScore(pointsAmount = 0) {
    
    return /*html*/ `
    <section data-pointsAmount="${pointsAmount}" class='player-score'>
        <div class='points'></div>
        <div class='points'></div>
        <div class='points'></div>
    </section>
    `;
}

export default PlayerScore;
