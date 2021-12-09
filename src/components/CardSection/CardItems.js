import React from 'react';
import {
    CardsItem,
    CardsItemLink,
    CardsItemPicWrap,
    CardsItemImg,
    CardsItemInfo,
    CardsItemText
} from './CardSection.elements.js'

const CardItems = (props) => {
  return (
    <>
      <CardsItem>
        <CardsItemLink to={props.path}>
          <CardsItemPicWrap data-category={props.label}>
            <CardsItemImg
              alt='Travel Image'
              src={props.src.default}
            />
          </CardsItemPicWrap>
          <CardsItemInfo>
            <CardsItemText>{props.text}</CardsItemText>
          </CardsItemInfo>
        </CardsItemLink>
      </CardsItem>
    </>
  );
}

export default CardItems;