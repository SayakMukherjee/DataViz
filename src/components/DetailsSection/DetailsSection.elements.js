/**
This file is for styling components of details section.
 */
import styled from "styled-components";

export const InfoSec = styled.div`
color: #fff;
padding: 60px 0;
background: ${({ lightBg }) => (lightBg ? '#80847E' : '#252B2F')};
`;

export const TextWrapper = styled.div`
max-width: 100%;
padding-top: 0;
padding-bottom: 0px;
text-align: center;

@media screen and (max-width: 768px) {
    padding-bottom: 65px;
}
`;

export const TopLine = styled.div`
color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#252B2F')};
font-size: 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
color: ${({ lightText }) => (lightText ? '#D99056' : '#252B2F')};
`;

export const Subtitle = styled.p`
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const AddData = styled.p`
max-width: 100%;
margin-bottom: 35px;
font-size: 12px;
line-height: 24px;
text-align: right;
color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;