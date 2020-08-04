import axios from 'axios';
import { getElementError } from '@testing-library/react';

const getGameInfo = (value,
                    setValue,
                    setGameImage,
                    setGameTitle,
                    setGameDetails,
                    setGameRating,
                    setGamePrice,
                    setFindBest) => {

    const setBackground = (img) => {
        document.getElementById('nav').style.backgroundImage = `url(${img})`;
        document.getElementById('nav').style.backgroundSize = 'cover';
        document.getElementById('nav').style.backgroundPosition = 'center';
    };

    const newValue = value.replace(/ /g,"-");

    axios.get(`https://api.rawg.io/api/games/${newValue}`)
        .then((data) => {
            console.log(data.data)
            setGameImage(data.data.background_image)
            setGameTitle(data.data.name)
            setGameDetails(data.data.description_raw)
            setGameRating(data.data.rating)
            setBackground(data.data.background_image_additional)

        })
        .catch((err)=> {
            console.log(err);
            setGameTitle('not found, sorry!')
            setGameDetails('')
            setGameImage('')
            setGameRating('')
        });
}

export default getGameInfo