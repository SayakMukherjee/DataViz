import React from 'react';
import { Container } from '../../globalStyles';
import {
    InfoSec,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    AddData
} from './DetailsSection.elements'

const DetailsSection = ({
    lightBg,
    lightTopLine,
    lightTextDesc,
    description,
    headLine,
    lightText,
    topLine,
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
                        <AddData lightTextDesc={lightTextDesc}>{additional}</AddData>
                    </TextWrapper>
                </Container>
            </InfoSec>
        </>
    )
}

export default DetailsSection
