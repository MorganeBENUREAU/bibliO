import './style.scss';

import { useState } from 'react';

import Header from '../Header';
import Body from '../Body';

const App = () => {

    const [isLogged, setIsLogged] = useState(false);

    const [users, setUsers] = useState([]);

    const [burgerIsOpen, setBurgerIsOpen] = useState(false);

    return (
        <>
            <Header isLogged={isLogged} users={users} setUsers={setUsers} setIsLogged={setIsLogged} burgerIsOpen={burgerIsOpen} setBurgerIsOpen={setBurgerIsOpen}/>
            <Body burgerIsOpen={burgerIsOpen} setBurgerIsOpen={setBurgerIsOpen}/>
        </>
    )
};


export default App;
