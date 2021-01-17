import React, {useState} from 'react';
import '../styles/Nav.css';
import getGameInfo from './requests/getGameInfo';
import { Input, Button } from 'semantic-ui-react';

const Nav = ({
            setGameImage,
            setGameTitle,
            setGameDetails,
            setGameRating,
            setReccomendedGameTitleOne,
            setReccomendedGameImageOne,
            setReccomendedGameTitleTwo,
            setReccomendedGameImageTwo,
            setReccomendedGameTitleThree,
            setReccomendedGameImageThree,
            setReccomendedGameImageFour,
            setReccomendedGameTitleFour,
        }) => {

    const [value, setValue] = useState('');


    const handleChange = (e) => {
        setValue(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getGameInfo(value,
                    setValue,
                    setGameImage,
                    setGameTitle,
                    setGameDetails,
                    setGameRating,
                    setReccomendedGameTitleOne,
                    setReccomendedGameImageOne,
                    setReccomendedGameTitleTwo,
                    setReccomendedGameImageTwo,
                    setReccomendedGameTitleThree,
                    setReccomendedGameImageThree,
                    setReccomendedGameImageFour,
                    setReccomendedGameTitleFour,
                );
        };

    return (
        <div className='nav' id='nav'>
            <img className='logo' src={ require('./images/logo.png') } onClick='location.href="http://localhost:3000"' alt='logo'/>
            <form className='search-form' onSubmit= {handleSubmit}>
                <Input onChange={handleChange} className='search-bar' placeholder='Search...' value={value}/>
                <Button className='search-button'><h3>Search!</h3></Button>
            </form>
        </div>
        
    )
}
        

export default Nav;