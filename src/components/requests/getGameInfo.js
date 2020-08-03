import axios from 'axios';

const getGameInfo = (value,
                    setValue,
                    setGameImage,
                    setGameTitle,
                    setGameDetails,
                    setGameRating,
                    setGamePrice,
                    setFindBest) => {


    axios.get(`https://api.rawg.io/api/games/${value}`)
        .then((data) => {
            console.log(data.data)
            setGameImage(data.data.background_image)
            setGameTitle(data.data.name)
            setGameDetails(data.data.description_raw)
            setGameRating(data.data.rating)

        })
        .catch((err)=> {
            console.log(err);
        });
}

export default getGameInfo