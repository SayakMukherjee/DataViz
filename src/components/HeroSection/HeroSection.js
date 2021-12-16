/**
This file is for creating the header hero component.
 */
import React from 'react'
import { HeroContainer, Video, Heading, Subtitle } from './HeroSection.elements'

const HeroSection = ({ vid, headLine, description}) => {
    return (
        <HeroContainer>
            <Video src={vid.default} autoPlay loop muted />
            <Heading>{headLine}</Heading>
            <Subtitle>{description}</Subtitle>
        </HeroContainer>
    )
}

export default HeroSection
