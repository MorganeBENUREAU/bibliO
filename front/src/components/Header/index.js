import './style.scss';

import { Link } from 'react-router-dom';
import axios from 'axios';

import { useState } from 'react';

import BurgerMenu from '../BurgerMenu';


const Header = ({ isLogged, users, setUsers, setIsLogged }) => {
    const [burgerIsOpen, setBurgerIsOpen] = useState(false);


    axios.get('https://localhost:3000/login')
        .then((response) => {
            const users = response.data;
            setUsers({ users });
            console.log(users);
        })
        .catch(error => console.error('Error: $(error)'));
    

    return (
        <header className="header">
                
                <h1><Link className="header__title" to="/">Bibli ' O</Link></h1>
            
                
                <BurgerMenu burgerIsOpen={burgerIsOpen} setBurgerIsOpen={setBurgerIsOpen} />
            
            
                <div className="connexion">
                    { isLogged ? 
                        <><a className="connexion__connected" href="/logout">Se déconnecter</a>
                        <a href="#">Bonjour {users.firstname} </a></>
                    : 
                        <><a className="connexion__not-connected" href="/login">Se connecter</a>
                        <a className="" href="/signup">S'inscrire</a></>
                    }
                </div>
            
                
            
            </header>
    );
};


export default Header;
