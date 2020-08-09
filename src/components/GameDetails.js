import React from 'react';
import '../styles/GameDetails.css';
import { Container, Header, Button, Icon, Segment} from 'semantic-ui-react';

const GameDetails = 
    ({  
        gameImage,
        gameTitle,
        gameDetails,
        gameRating,
        gamePrice,
    
    }) => {

    const square = { width: 140, height: 115 }

    return (
        <div className='game-details'>
                <img className='game-image' src={gameImage} alt='gamepic' />
            <Container className='about-game' text>
                    <Header as='h1' className='header' > {gameTitle} </Header>
                {gameDetails}
                <Segment className='rating' circular style={square}>
                <Header as='h2'>
                    Rating 
                    <Header.Subheader>
                        {`${gameRating}`}
                    </Header.Subheader>
                </Header>
                <Icon name='star' size='small'></Icon>
                <Icon name='star' size='small'></Icon>
                <Icon name='star' size='small'></Icon>
                <Icon name='star' size='small'></Icon>
            </Segment>
            <Button animated='fade'>
                        <Button.Content visible> Cheapest Price </Button.Content>
                        <Button.Content hidden>${gamePrice}</Button.Content>
                    </Button>
            </Container>
            
        </div>
    )
}
        

export default GameDetails;