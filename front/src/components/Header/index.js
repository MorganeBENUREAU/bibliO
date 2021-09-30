import './style.scss';

import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';

const Header = ({ isLogged, users, setUsers, setIsLogged }) => {

    const test = () => {
        axios.get('https://localhost:3000/login')
            .then((response) => {
                const users = response.data;
                setUsers({ users })
            })
            .catch(error => console.error('Error: $(error)'));
    };

    return (
        <header className="header">
                
                <h1><Link className="header__title" to="/">Bibli ' O</Link></h1>
            
                <nav className="header__navbar navbar">
                    <div className="navbar__link">
                        <NavLink exact to="/books">
                            Livres
                        </NavLink>
                        <NavLink exact to="/genres">
                            Genres
                        </NavLink>
                        <NavLink exact to="/authors">
                            Auteurs
                        </NavLink>
                        <NavLink exact to="/publishers">
                            Editeurs
                        </NavLink>
                    </div>
            
                    <div className="navbar__connexion">
                        { isLogged ? 
                            <><a className="" href="/api/logout">Se déconnecter</a>
                            <a href="#">Bonjour {users.firstname} </a></>
                        : 
                            <><a className="" href="/api/login">Se connecter</a>
                            <a className="" href="/api/signup">S'inscrire</a></>
                        }
                    </div>
            
                </nav>
            
            </header>
    );
};


export default Header;
