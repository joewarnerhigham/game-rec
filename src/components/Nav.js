import React from 'react';
import '../styles/Nav.css';
import { Input } from 'semantic-ui-react';

const Nav = () => {
    return (
        <div className='nav'>
            
            <h1 className='logo'> GaRecco </h1>
            <Input className='search-bar' placeholder='Search...'/>
            
        
        </div>
    )
}
        

export default Nav;