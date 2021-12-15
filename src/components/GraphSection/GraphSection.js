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
    AddData,
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
    viz,
    additional
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
                        <TextWrapper>
                                <AddData lightTextDesc={lightTextDesc}>{additional}</AddData>
                        </TextWrapper>
                </Container>
            </InfoSec>
        </>
    )
}

export default GraphSection
