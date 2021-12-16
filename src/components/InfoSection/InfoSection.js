/**
This file is for creating the information and graph display component.
 */
import React from 'react';
import { Container } from '../../globalStyles';
import {
    InfoSec,
    InfoColumn,
    InfoRow, TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    AddData
} from './InfoSection.elements';

const InfoSection = ({
    lightBg,
    imgStart,
    lightTopLine,
    lightTextDesc,
    description,
    headLine,
    lightText,
    topLine,
    viz,
    additional
}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            {viz()}
                            <TextWrapper>
                                <AddData lightTextDesc={lightTextDesc}>{additional}</AddData>
                            </TextWrapper>
                        </InfoColumn>

                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
