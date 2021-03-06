/**
This file is for creating the graph display component.
 */
import React from 'react';
import { Container } from '../../globalStyles';
import {
    InfoSec,
    TextWrapper,
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
