import './style.scss';

// import { Link } from 'react-router-dom';
// import axios from 'axios';

// import { useState } from 'react';


import Menu from '../BurgerMenu/Menu';


const Body = ({ burgerIsOpen, setBurgerIsOpen }) => (

    <div className="bodyBurgerMenu" onClick={ () => setBurgerIsOpen(!burgerIsOpen)}>  

        {burgerIsOpen && <Menu/>}
    </div>
            

);


export default Body;
