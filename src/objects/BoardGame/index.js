import './style.css';

import javascriptLogo from '../../images/logo-javascript.png';
import cssLogo from '../../images/logo-css.png';
import htmlLogo from '../../images/logo-html.png';

import CardFrontBack from '../../components/CardFrontBack';

function BoardGame(amountCards) {
    const cardIcons = [
        {
            icon: javascriptLogo,
            alt: 'JavaScript Logo'
        },
        {
            icon: javascriptLogo,
            alt: 'JavaScript Logo'
        },
        {
            icon: cssLogo,
            alt: 'CSS Logo'
        },
        {
            icon: cssLogo,
            alt: 'CSS Logo'
        },
        {
            icon: htmlLogo,
            alt: 'HTML Logo'
        },
        {
            icon: htmlLogo,
            alt: 'HTML Logo'
        }
    ];


const cards = cardIcons.sort(() => Math.random() - 0.5);

const $htmlCards = cards.map(card => CardFrontBack(card.icon, card.alt)).join('');

    return /*html*/`
        <section class="board-game">
            ${$htmlCards}
        </section>
    `;
}

export default BoardGame;
