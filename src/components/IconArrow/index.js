import './style.css';
import IconArrowDown from '../../images/IconArrowDown.png';


function IconArrow(classActive){
    return `
        <section class='icon-arrow ${classActive}'>
            <img src='${IconArrowDown}' alt='An arrow indicating whose turn it is'>
        </section>
    `
}


export default IconArrow;