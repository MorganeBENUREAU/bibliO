import './style.scss';


import Burger from './Burger';
import Menu from './Menu';

const BurgerMenu = ({ burgerIsOpen, setBurgerIsOpen }) => (
    
    <div className="burgerMenu" onClick={ () => setBurgerIsOpen(!burgerIsOpen)}>  
        
        { burgerIsOpen ?
            <Menu />
            :
            <Burger /> 
        }
        
    </div>
);


export default BurgerMenu;
