import React from 'react';
import '../styles/GameDetails.css';
import { Container, Header, Segment, Button, Icon } from 'semantic-ui-react';

const GameDetails = 
    ({  
        gameImage,
        gameTitle,
        gameDetails, 
        gameRating,
        getPrice,
    
    }) => {

    const square = { width: 175, height: 175 }

    

    return (
        <div className='game-details'>
            <img className='game-image' src={gameImage} alt='gamepic' />
            <Container className='about-game' text>
            <Header as='h2'> GTA San Andreas</Header>
                    <p>
                        Five years ago Carl Johnson escaped from the pressures of life in Los Santos,
                        San Andreas... a city tearing itself apart with gang trouble, drugs and corruption.
                        Where filmstars and millionaires do their best to avoid the dealers and gangbangers.
                        Now, it's the early 90s. Carl's got to go home. His mother has been murdered, his 
                        family has fallen apart and his childhood friends are all heading towards disaster.
                    </p>
                    <p>
                        On his return to the neighborhood, a couple of corrupt cops frame him for homicide. 
                        CJ is forced on a journey that takes him across the entire state of San Andreas, to 
                        save his family and to take control of the streets.
                    </p>
                    <p>
                    The game features references to many real-life elements of the world, such as its cities, 
                    regions, and landmarks, with its plot heavily based on several real-life events in Los 
                    Angeles in the early 1990s, including the rivalry between real-life street gangs, the 
                    1980s-early 1990s crack epidemic, the LAPD Rampart scandal, and the 1992 Los Angeles riots.
                     Unlike its predecessor, San Andreas brought with it new elements of gameplay that would 
                     be later incorporated in future titles, including RPG-style mechanics, customisation
                      options with both clothing and vehicle appearances, a vast array of activities and 
                      mini-games, and the inclusion of gambling games.
                    </p>
                    
                <div>
                    <Button animated='fade'>
                        <Button.Content visible> Cheapest Price </Button.Content>
                        <Button.Content hidden>$12.99</Button.Content>
                    </Button>
                </div>
            </Container>
            <Segment circular style={square}>
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