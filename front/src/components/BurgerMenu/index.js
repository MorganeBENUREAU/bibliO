import './style.scss';


import Burger from './Burger';
// import Menu from './Menu';

const BurgerMenu = ({ burgerIsOpen, setBurgerIsOpen }) => (
    
    <div className="burgerMenu" onClick={ () => setBurgerIsOpen(!burgerIsOpen)}>  
        <Burger/>
    </div>
);


export default BurgerMenu;
