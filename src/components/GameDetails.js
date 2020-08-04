import React from 'react';
import '../styles/GameDetails.css';
import { Container, Header, Segment, Button, Icon } from 'semantic-ui-react';

const GameDetails = 
    ({  
        gameImage,
        gameTitle,
        gameDetails, 
        gameRating,
        gamePrice,
    
    }) => {

    const square = { width: 175, height: 155 }

    

    return (
        <div className='game-details'>
            <img className='game-image' src={gameImage} alt='gamepic' />
            <Container className='about-game' text>
                <Header as='h2' > {gameTitle} </Header>
                {gameDetails}
                <div>
                    <Button animated='fade'>
                        <Button.Content visible> Cheapest Price </Button.Content>
                        <Button.Content hidden>${gamePrice}</Button.Content>
                    </Button>
                </div>
            </Container>
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
        </div>
    )
}
        

export default GameDetails;