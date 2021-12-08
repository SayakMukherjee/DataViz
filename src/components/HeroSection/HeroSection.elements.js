import styled from "styled-components";

export const HeroContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2);
    object-fit: contain;
`;

export const Video = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
`;

export const Heading = styled.h1`
    font-size: 100px;
    color: #fff;
    margin-top: -100px;

    @media screen and (max-width: 960px) {
        font-size: 70px;
        margin-top: -150px;
    }

    @media screen and (max-width: 768) {
        font-size: 50px;
        margin-top: -100px;
    }
`;

export const Subtitle = styled.p`
    margin-top: 8px;
    color: #fff;
    font-size: 32px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    @media screen and (max-width: 768) {
        font-size: 30px;
    }
`;