import React from 'react';
import CardItems from './CardItems';
import {
    Cards,
    CardSectionHeader,
    CardsContainer,
    CardsWrapper,
    CardsItems,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle
} from './CardSection.elements'

const CardSectiom = () =>  {
  return (
    <Cards lightBg={true}>
      <TextWrapper>
          <TopLine lightTopLine={false}>Effects</TopLine>
          <Heading lightText={false}>Changing Weather Patterns</Heading>
          <Subtitle lightTextDesc={false}>Rise in global temperature is changing the weather patterns and disrupting the natural balance. 
          This endangers all forms of life on Earth.</Subtitle>
      </TextWrapper>
      <CardsContainer>
        <CardsWrapper>
          <CardsItems>
            <CardItems
              src={require('../../images/floods.jpg')}
              text='Severe storms result in floods and landslides destroying homes and communities'
              path='/'
            />
            <CardItems
              src={require('../../images/drought.jpg')}
              text="With increase in water scarcity across regions, lands are turning into deserts affecting food production and people's lives across the world"
              path='/'
            />
            <CardItems
              src={require('../../images/forest-fire.jpg')}
              text='Forest fires threaten the survival of many wildlife species across the world'
              path='/'
            />
            <CardItems
              src={require('../../images/melting.jpg')}
              text='Melting ice caps results in the increase of sea level and pose a serious danger to people living in low lying areas.'
              path='/'
            />
          </CardsItems>
        </CardsWrapper>
      </CardsContainer>
    </Cards>
  );
}

export default CardSectiom;