import './style.scss';

import { useState } from 'react';

import Header from '../Header';

const App = () => {

    const [isLogged, setIsLogged] = useState(false);

    const [users, setUsers] = useState([]);

    return (
        <Header isLogged={isLogged} users={users} setUsers={setUsers} setIsLogged={setIsLogged}/>
    )
};


export default App;
