import './style.css';
import IconArrowDown from '../../images/IconArrowDown.png';

window.IconArrow = {};

window.IconArrow = {
    HandleClick: () => {
      const $divIconArrow = document.querySelector('.icon-arrow');
        let $dataPlayer = $divIconArrow.dataset.player;
      
        if ($dataPlayer == 'player-2'){
            $divIconArrow.dataset.player = 'player-1';
        } else {
            $divIconArrow.dataset.player = 'player-2';
        }
    }
  };

function IconArrow(player = 'player-1'){
    return `
        <section data-player = "${player}" class='icon-arrow'>
            <img src='${IconArrowDown}' alt='An arrow indicating whose turn it is'>
        </section>
    `
}


export default IconArrow;