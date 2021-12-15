import React from 'react';
import CardItems from './CardItems';
import {
    Cards,
    CardSectionHeader,
    CardsContainer,
    CardsWrapper,
    CardsItems
} from './CardSection.elements'

const CardSectiom = () =>  {
  return (
    <Cards lightBg={true}>
      <CardSectionHeader>Effects of Climate Change</CardSectionHeader>
      <CardsContainer>
        <CardsWrapper>
          <CardsItems>
            <CardItems
              src={require('../../images/floods.jpg')}
              text='Floods are causing havoc across the world'
              path='/'
            />
            <CardItems
              src={require('../../images/drought.jpg')}
              text='Droughts have become a regular phenomenon'
              path='/'
            />
            <CardItems
              src={require('../../images/forest-fire.jpg')}
              text='Forst fires are raging through the amazons'
              path='/'
            />
            <CardItems
              src={require('../../images/melting.jpg')}
              text='Melting of ice caps increases risk of flooding'
              path='/'
            />
          </CardsItems>
        </CardsWrapper>
      </CardsContainer>
    </Cards>
  );
}

export default CardSectiom;