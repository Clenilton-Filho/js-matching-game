import './styles/settings/colors.css';
import './styles/generic/reset.css';
import './styles/elements/base.css';

import BoardGame from './objects/BoardGame';
import ScoreBoard from './objects/ScoreBoard';

const $root = document.querySelector('#root');


$root.insertAdjacentHTML("beforeend",/*html*/ 
    `
        ${ScoreBoard()}
        ${BoardGame(6)}
    ` 
    );
