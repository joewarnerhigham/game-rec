import React, {useState} from 'react';
import '../styles/Nav.css';
import { Input } from 'semantic-ui-react';

const Nav = ({
            setgameImage,
        }) => {

    const [value, setValue] = useState('');


    const handleChange = (e) => {
        setValue(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setgameImage(value);
    };

    return (
        <div className='nav'>
            <div className='logo-img'></div>
            <h1 className='logo'> GaRecco </h1>
            <form onSubmit= {handleSubmit}>
                <Input onChange={handleChange} className='search-bar' placeholder='Search...' value={value}/>
            </form>
        
        </div>
    )
}
        

export default Nav;