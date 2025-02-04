import "../../styles/elements/base.css";
import "./style.css"

function PlayerName(name){
    return `
        <section class = 'player-name'>
            ${name}
        </section>
    `
};

export default PlayerName;