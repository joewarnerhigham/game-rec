import React, {useState} from 'react';
import '../styles/Nav.css';
import { Input } from 'semantic-ui-react';
import getGameInfo from './requests/getGameInfo';

const Nav = ({
            setGameImage,
            setGameTitle,
            setGameDetails,
            setGameRating,
        }) => {

    const [value, setValue] = useState('');


    const handleChange = (e) => {
        setValue(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getGameInfo(value, setValue, setGameImage, setGameTitle, setGameDetails, setGameRating);
        };

    return (
        <div className='nav'>
            <div className='logo-img'></div>
            <h1 className='logo'> GaRecco </h1>
            <form onSubmit= {handleSubmit}>
                <Input onChange={handleChange} className='search-bar' placeholder='Search...' value={value}/>
                <button classname='search-button'>Search</button>
            </form>
        
        </div>
    )
}
        

export default Nav;