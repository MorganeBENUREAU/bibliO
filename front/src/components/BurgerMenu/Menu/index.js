import './style.scss';

import { NavLink } from 'react-router-dom';

const Menu = () => (
    <nav className="menu">
        <NavLink exact to="/books">Livres</NavLink>
        <NavLink exact to="/genres">Genres</NavLink>
        <NavLink exact to="/authors">Auteurs</NavLink>
        <NavLink exact to="/publishers">Editeurs</NavLink>
    </nav>
);

export default Menu;
