import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardSec = styled.div`
    color: #D99056;
    padding: 160px 0;
    background: ${({ lightBg }) => (lightBg ? '#80847E' : '#252B2F')};
`;

export const CardsItem = styled.li`
    display: flex;
    flex: 1;
    margin: 0 1rem;
    border-radius: 10px;
    background-color: #fff;

    @media only screen and (max-width: 1024px) {
        display: flex;
        margin-bottom: 2rem;
    }
`;

export const CardsItemLink = styled(Link)`
    display: flex;
    flex-flow: column;
    width: 100%;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.17));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
`;

export const CardsItemPicWrap = styled.figure`
    position: relative;
    width: 100%;
    padding-top: 67%;
    overflow: hidden;
`;

export const CardsItemImg = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;

    &:hover {
        transform: scale(1.1);
    }
`;

export const CardsItemInfo = styled.div`
    padding: 20px 30px 30px;
    text-align: center;
`;

export const CardsItemText = styled.h5`
    color: #252e48;
    font-size: 18px;
    line-height: 24px;
`;

export const Cards = styled.div`
    color: #fff;
    padding: 160px 0;
    background: ${({ lightBg }) => (lightBg ? '#80847E' : '#252B2F')};
`;

export const CardSectionHeader = styled.h1`
    color: #1c2237;
    text-align: center;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
`;

export const CardsWrapper = styled.div`
    position: relative;
    margin: 50px 0 45px;
`;

export const CardsItems = styled.ul`
    margin-bottom: 24px;

    @media only screen and (min-width: 1024px) {
        display: flex;
    }
`;