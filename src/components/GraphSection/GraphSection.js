import React from 'react';
import { Container } from '../../globalStyles';
import { ImgWrapper } from '../InfoSection/InfoSection.elements';
import {
    InfoSec,
    InfoColumn,
    InfoRow, TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    VizWrapper,
} from './GraphSection.elements';

const GraphSection = ({
    lightBg,
    imgStart,
    lightTopLine,
    lightTextDesc,
    description,
    headLine,
    lightText,
    topLine,
    viz
}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                        <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        </TextWrapper>
                        <VizWrapper>
                            {viz()}
                        </VizWrapper>
                </Container>
            </InfoSec>
        </>
    )
}

export default GraphSection
